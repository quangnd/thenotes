---
aliases:
  - Applications don’t reliably maintain scroll positions
created: 2026-05-26
modified: 2026-06-11
---

Các giao diện có vùng cuộn dài (ví dụ: văn bản dài, lịch sử tin nhắn) dễ gây mất phương hướng và mong manh, một phần vì nhà phát triển ứng dụng không coi vị trí cuộn là một phần quan trọng của trạng thái ứng dụng.

Nếu người dùng đánh dấu một tin nhắn hoặc chọn một bộ lọc, trạng thái đó có khả năng được lưu lại; mất lựa chọn đó có khả năng bị xem là mất dữ liệu. Ngược lại, các thao tác phổ biến trong giao diện lại thường xuyên làm mất vị trí cuộn.

Một thách thức ở đây là dù hành vi cuộn thường được triển khai qua một thành phần hệ thống chung, *diễn giải ngữ nghĩa* của vị trí cuộn như trạng thái ứng dụng lại phụ thuộc vào từng giao diện cụ thể. Ví dụ, cùng một khung nhìn có thể được tái sử dụng để hiển thị nhiều luồng hội thoại khác nhau. Trong một số trường hợp, nên lưu và khôi phục vị trí cuộn của cuộc trò chuyện được xem gần nhất; trong trường hợp khác, nên lưu vị trí cuộn độc lập cho từng cuộc trò chuyện. Vì vậy, việc lưu trạng thái này không thể diễn ra ở lớp thường được xem là mô hình của nó.

Liên quan: [[Đọc kỹ thuật số cuộn liên tục gây khó chịu khi phá vỡ tính bền vững đối tượng]]

---

H. Tại sao các ứng dụng không duy trì vị trí cuộn của khung nhìn giao diện một cách đáng tin cậy?
Đ. Các nhà phát triển không coi vị trí cuộn là phần quan trọng của trạng thái giao diện.

H. Một số thách thức trong việc lưu trữ vị trí cuộn như là một phần của trạng thái ứng dụng là gì?
Đ. (Ví dụ: thông thường framework UI muốn là "mô hình", diễn giải ngữ nghĩa của danh tính khung nhìn thay đổi tinh tế, v.v.)
