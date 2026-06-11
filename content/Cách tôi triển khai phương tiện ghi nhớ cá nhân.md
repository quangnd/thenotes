---
aliases:
  - My implementation of a personal mnemonic medium
created: 2026-05-26
modified: 2026-06-11
---

Tôi đã triển khai ý tưởng [[Phương tiện ghi nhớ có thể được mở rộng sang ghi chú cá nhân]] trong [[Hệ thống viết ghi chú]] của riêng mình.

Hệ thống hoạt động bằng cách liên tục quét một tập hợp tệp Markdown để tìm các câu nhắc được nhúng (xem cú pháp bên dưới). Các câu nhắc này sau đó trở thành một phần trong bộ làm việc của tôi cho các buổi ôn tập lặp lại ngắt quãng. Tôi cũng đã xây dựng một thành phần liên tục đồng bộ các câu nhắc được trích xuất sang Anki.

Một số ghi chú ví dụ có tính năng này:
- [[Dung lượng kênh của con người với tư cách bộ xử lý thông tin]]
- [[Dung lượng kênh của con người tăng theo số bit trên mỗi khối]]

Để xem phần triển khai, hãy xem [https://github.com/andymatuschak/computer-supported-thinking](https://github.com/andymatuschak/computer-supported-thinking).

Để xem các suy nghĩ thô đang tiếp diễn, hãy xem personal mnemonic medium.

### Cú pháp (Syntax)

#### Tạo câu nhắc SRS hai mặt thông thường (Creating typical two-sided SRS prompts)
Q. How many dimensions are in a qubit's vector space?
A. Two.

Dòng trống giữa câu hỏi và câu trả lời là tùy chọn. Hiện tại, câu hỏi và câu trả lời không thể kéo dài qua nhiều đoạn văn: đoạn chứa Q. hoặc A. sẽ được trích xuất làm trường tương ứng.

#### Tạo câu nhắc cloze deletion (Creating cloze deletion prompts)
Trong bối cảnh các ghi chú văn xuôi, tôi thấy cloze deletion thường tự nhiên hơn. Đoạn dưới đây ánh xạ thành một câu nhắc cloze deletion duy nhất với ba thẻ:

- Once activated, a service worker {performs one-time startup computation}, then transitions to {idle}. From that state, it'll handle {fetch or message events} until it eventually terminates.

Câu nhắc cloze sẽ dùng toàn bộ đoạn văn xung quanh phần văn bản được ẩn. Ví dụ, câu nhắc hai mặt này tương đương với một trong những thẻ được trích xuất từ ví dụ trước:

- Q. Once activated, a service worker **–**, then transitions to idle. From that state, it'll handle fetch or message events until it eventually terminates.
- A. Once activated, a service worker *performs one-time startup computation*, then transitions to idle. From that state, it'll handle fetch or message events until it eventually terminates.

#### Tính lũy đẳng và danh tính (Idempotency and identity)
Hệ thống này được thiết kế để chạy lũy đẳng. Nghĩa là bạn có thể tiếp tục chỉnh sửa các tệp ghi chú theo thời gian, và hệ thống sẽ theo dõi các thay đổi tương ứng. Khi bạn thay đổi ghi chú, hệ thống sẽ giữ lại trạng thái SRS cho mọi câu nhắc được nhúng, trừ những câu nhắc mà bạn đã chỉnh sửa trực tiếp.

Nói chính xác hơn một chút, các câu nhắc được nhúng có *danh tính*. Bạn có thể sửa ghi chú xung quanh một câu nhắc, hoặc thậm chí chuyển câu nhắc sang một ghi chú mới, và lịch sử ôn tập của nó vẫn được giữ lại. Nhưng nếu bạn sửa văn bản của chính câu nhắc đó, nó sẽ được xem là một câu nhắc mới, và lịch sử ôn tập sẽ không được chuyển từ câu nhắc cũ sang. Lý do là hệ thống này dựa trên các tệp văn bản thuần túy, không có đủ cấu trúc ngữ nghĩa để chỉ rõ một thay đổi nào đó là câu nhắc mới hay chỉ là phiên bản đã sửa của câu nhắc cũ. Muốn khắc phục điều này, ta sẽ phải thêm heuristic hoặc cơ chế đánh dấu danh tính.

Danh tính của câu nhắc hai mặt được suy ra từ hash của văn bản câu hỏi và câu trả lời. Danh tính của câu nhắc cloze được suy ra từ hash của đoạn văn chứa nó.

Hệ thống vẫn sẽ theo dõi các câu nhắc nếu bạn di chuyển chúng giữa các tệp ghi chú, nhưng hành vi sẽ không xác định nếu các câu nhắc giống hệt nhau xuất hiện trong nhiều tệp ghi chú.
