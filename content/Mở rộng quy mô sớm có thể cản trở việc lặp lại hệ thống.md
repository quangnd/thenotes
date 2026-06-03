---
aliases:
  - Premature scaling can stunt system iteration
created: 2026-05-26
modified: 2026-05-26
---
Đặc biệt ở Silicon Valley, khi một người có một nguyên mẫu hoặc một ý tưởng hoạt động tốt, sự cám dỗ là mở rộng quy mô. Làm cho nó phục vụ nhiều người hơn và nhiều trường hợp sử dụng hơn, biến nó thành một nền tảng, làm cho các đồ thị đi lên và sang phải, v.v. Đây rõ ràng là một kịch bản mạnh mẽ, nhưng cần triển khai đúng thời điểm vì nó có xu hướng đóng băng kiến trúc khái niệm của hệ thống.

### Tại sao
Cơ sở hạ tầng chung đơn giản là tốn thời gian để xây dựng. Bạn phải thiết kế giao diện cẩn thận, viết tài liệu và kiểm thử, và đảm bảo rằng hệ thống của bạn sẽ xử lý được tải. Tất cả những điều đó cạnh tranh với việc thử nghiệm, và không chỉ vì mất thời gian xây dựng: nó còn làm hệ thống cứng nhắc hơn nhiều.

Một khi bạn có nhiều người dùng với nhiều trường hợp sử dụng, việc thay đổi bất cứ điều gì hoặc theo đuổi các thí nghiệm triệt để trở nên khó khăn hơn. Bạn phải đảm bảo không phá vỡ mọi thứ cho mọi người hoặc phải giao tiếp và quản lý thay đổi cẩn thận.

Chính những người dùng đa dạng đó đơn giản là tiêu tốn rất nhiều thời gian hàng ngày: một lỗi xảy ra với 1% người dùng sẽ không gây ra vấn đề thực sự trong một nguyên mẫu nhỏ, nhưng nó sẽ là ưu tiên cao khi bạn có 100 nghìn người dùng.

Một khi kịch bản này trở thành mục tiêu chính, động lực của bạn thay đổi: mục tiêu tự nhiên sẽ trở thành làm cho đồ thị đi lên, thay vì trả lời các câu hỏi cơ bản về hệ thống của bạn.

### Về việc duy trì quy mô nhỏ
Một lợi thế lớn của việc mở rộng quy mô là bạn sẽ nhận được nhiều phản hồi hơn cho quá trình [[Hiểu biết sâu sắc qua việc làm]] của mình. Đúng là [[Thiết kế hệ thống hiệu quả cần insight từ bối cảnh sử dụng thật]], nhưng có thể tạo ra các bối cảnh sử dụng nghiêm túc quy mô nhỏ cho phép bạn trả lời nhiều câu hỏi cốt lõi về hệ thống. Thực tế: các nhà công nghệ thường bản năng mở rộng quy mô hệ thống để tăng cơ hội nhận được phản hồi mạnh mẽ từ người dùng nghiêm túc, nhưng đó là cách tiếp cận khá ngẫu nhiên. Bạn có thể đạt được mục tiêu đó bằng cách cấu trúc cẩn thận quá trình tạo nguyên mẫu. Điều này có thể tốt hơn cuối cùng vì [[Hiểu biết sâu sắc thông qua thực hành ưu tiên bricolage hơn thiết kế lớn từ đầu]]

Cuối cùng, tất nhiên, bạn sẽ cần tổng quát hóa hệ thống để trả lời một số câu hỏi nhất định, nhưng ít nhất về mặt kết quả nghiên cứu, tốt nhất là để việc mở rộng quy mô *đi theo* nhu cầu được thể hiện bởi những câu hỏi đó. Theo nghĩa đó, đây là mục đích phương tiện, không phải mục đích cuối cùng.