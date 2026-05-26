---
aliases:
  - Applications don’t reliably maintain scroll positions
---

Các giao diện có vùng cuộn dài (ví dụ: văn bản dài, lịch sử tin nhắn) cảm thấy mất phương hướng và dễ vỡ một phần vì các nhà phát triển ứng dụng không coi vị trí cuộn là một phần quan trọng của trạng thái ứng dụng.

Nếu người dùng đánh dấu một tin nhắn, hoặc chọn một bộ lọc, điều đó có khả năng được lưu lại; mất lựa chọn đó có khả năng bị coi là mất dữ liệu. Ngược lại, các hành động phổ biến trong giao diện thường xuyên làm mất vị trí cuộn.

Một thách thức ở đây là trong khi các hành vi cuộn thường được triển khai thông qua một thành phần hệ thống chung, *diễn giải ngữ nghĩa* của vị trí cuộn như là trạng thái ứng dụng lại phụ thuộc vào từng giao diện cụ thể. Ví dụ, cùng một khung nhìn có thể được tái sử dụng để hiển thị một số luồng hội thoại khác nhau. Trong một số trường hợp, có ý nghĩa khi lưu và khôi phục vị trí cuộn của cuộc trò chuyện được xem gần nhất; trong các trường hợp khác, có ý nghĩa khi lưu vị trí cuộn độc lập cho mỗi cuộc trò chuyện. Vì vậy việc lưu trữ trạng thái này không thể diễn ra ở lớp mà thông thường sẽ là mô hình của nó.

Liên quan: [[Đọc kỹ thuật số cuộn liên tục gây khó chịu khi phá vỡ tính bền vững đối tượng]]

---

H. Tại sao các ứng dụng không duy trì vị trí cuộn của khung nhìn giao diện một cách đáng tin cậy?
Đ. Các nhà phát triển không coi vị trí cuộn là phần quan trọng của trạng thái giao diện.

H. Một số thách thức trong việc lưu trữ vị trí cuộn như là một phần của trạng thái ứng dụng là gì?
Đ. (Ví dụ: thông thường framework UI muốn là "mô hình", diễn giải ngữ nghĩa của danh tính khung nhìn thay đổi tinh tế, v.v.)

---

#### Tài liệu tham khảo
[Omar Rizwan trên Twitter: "Tôi sợ và bực bội khi cuộn (ví dụ: cuộn lên rất cao để xem lịch sử chat) vì tôi biết các nhà phát triển ứng dụng không coi nó nghiêm túc như trạng thái ứng dụng—như thể tôi nhấp vào một chat khác, rồi quay lại chat nơi tôi đã cuộn lên rất cao, và ứng dụng đã bỏ đi vị trí cuộn của tôi"](https://twitter.com/rsnous/status/1251810672544845826)
