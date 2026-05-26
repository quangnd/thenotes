---
aliases:
  - My implementation of a personal mnemonic medium
---

Tôi đã triển khai [[Phương tiện ghi nhớ có thể được mở rộng sang ghi chú cá nhân]] trong [[Hệ thống viết ghi chú]] của riêng mình.

Hệ thống hoạt động bằng cách liên tục quét một tập hợp các tệp Markdown để tìm các lời nhắc được nhúng (xem cú pháp bên dưới). Các lời nhắc sau đó được coi là một phần của bộ làm việc của tôi cho các buổi ôn tập lặp lại ngắt quãng. Tôi cũng đã triển khai một thành phần liên tục đồng bộ hóa các lời nhắc được trích xuất đó sang Anki.

Một số ghi chú ví dụ bao gồm tính năng này:
- [[Dung lượng kênh của con người với tư cách bộ xử lý thông tin]]
- [[Dung lượng kênh của con người tăng theo số bit trên mỗi khối]]

Để xem triển khai, hãy xem [https://github.com/andymatuschak/computer-supported-thinking](https://github.com/andymatuschak/computer-supported-thinking).

Để có các suy nghĩ chưa được xử lý đang diễn ra, hãy xem personal mnemonic medium.

### Cú pháp (Syntax)

#### Tạo lời nhắc SRS hai mặt điển hình (Creating typical two-sided SRS prompts)
Q. How many dimensions are in a qubit's vector space?
A. Two.

Dòng trống giữa câu hỏi và câu trả lời là tùy chọn. Câu hỏi và câu trả lời hiện không thể trải qua nhiều đoạn văn: đoạn văn bao gồm Q. hoặc A. được trích xuất làm trường đó.

#### Tạo lời nhắc cloze deletion (Creating cloze deletion prompts)
Trong bối cảnh các ghi chú văn xuôi, tôi thấy cloze deletion thường tự nhiên hơn. Đoạn này ánh xạ thành một lời nhắc cloze deletion duy nhất với ba thẻ:

- Once activated, a service worker {performs one-time startup computation}, then transitions to {idle}. From that state, it'll handle {fetch or message events} until it eventually terminates.

Lời nhắc cloze sẽ sử dụng toàn bộ đoạn văn xung quanh văn bản. Ví dụ, lời nhắc hai mặt này tương đương với một trong những thẻ được trích xuất từ ví dụ trước:

- Q. Once activated, a service worker **–**, then transitions to idle. From that state, it'll handle fetch or message events until it eventually terminates.
- A. Once activated, a service worker *performs one-time startup computation*, then transitions to idle. From that state, it'll handle fetch or message events until it eventually terminates.

#### Idempotency và danh tính (Idempotency and identity)
Hệ thống này được thiết kế để hoạt động idempotent. Nghĩa là: bạn có thể tiếp tục sửa đổi các tệp ghi chú của mình theo thời gian, và nó sẽ theo dõi các thay đổi tương ứng. Khi bạn thay đổi các ghi chú của mình, hệ thống sẽ duy trì trạng thái SRS của bạn cho tất cả các lời nhắc được nhúng, ngoại trừ các lời nhắc bạn đã chỉnh sửa trực tiếp.

Nói chính xác hơn một chút, các lời nhắc được nhúng có *danh tính*. Bạn có thể sửa đổi ghi chú xung quanh một lời nhắc hoặc thậm chí di chuyển lời nhắc sang một ghi chú mới, và lịch sử ôn tập của bạn sẽ được bảo tồn. Nhưng nếu bạn sửa đổi văn bản của một lời nhắc, nó sẽ được coi là một lời nhắc mới, và lịch sử ôn tập của bạn sẽ không được chuyển từ lời nhắc cũ. Đó là vì hệ thống này dựa trên các tệp văn bản thuần túy, không có đủ cấu trúc ngữ nghĩa để chỉ định rõ ràng liệu một sửa đổi nhất định có đại diện cho một lời nhắc mới hay là sự sửa đổi của lời nhắc cũ. Việc khắc phục điều này sẽ đòi hỏi phải giới thiệu các heuristics hoặc đánh dấu nhận dạng thêm.

Danh tính lời nhắc hai mặt được suy ra từ hash của văn bản câu hỏi và câu trả lời. Danh tính lời nhắc cloze được suy ra từ hash của đoạn văn chứa chúng.

Trong khi hệ thống sẽ vui vẻ theo dõi các lời nhắc nếu bạn di chuyển chúng giữa các tệp ghi chú, hành vi sẽ không xác định nếu các lời nhắc giống hệt nhau xuất hiện trong nhiều tệp ghi chú.
