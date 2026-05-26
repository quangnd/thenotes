---
aliases:
  - Trải nghiệm thể hiện kích hoạt tham gia chủ động trong môi trường khai phóng
---

[[Enabling environments focus on doing what’s enabled|Môi trường khai phóng tập trung vào việc thực hiện điều được khai phóng]], nhưng [[Novices in enabling environments often can’t do what’s enabled|Người mới trong môi trường khai phóng thường chưa làm được điều môi trường đó khai phóng]]. Một [[Enacted experience|Trải nghiệm thể hiện]] thiết kế tốt có thể cho người tham gia *thực sự làm* ngay những việc mà môi trường khai phóng.

Ví dụ, giả sử một công ty phần mềm có hạ tầng test riêng giúp kỹ sư mạnh dạn thay đổi lớn trong code. Quản lý có thể giới thiệu hạ tầng đó cho kỹ sư mới bằng cách giao một tính năng mà quản lý biết chắc sẽ phải sửa phần code đã được test kỹ. Kỹ sư sẽ thấy code xung quanh có tham chiếu tới framework test, và tự nhiên tích hợp tính năng mới theo cách tương tự. Phần code review sẽ kéo theo các trao đổi hữu ích về test. Hạ tầng test cho kỹ sư đủ tự tin để release tính năng. Sau trải nghiệm này, kỹ sư có thể viết test cho các tính năng sau một cách thoải mái.

So với kịch bản ngược lại: quản lý không làm vậy. Ai đó giao cho kỹ sư việc mở rộng một tính năng chưa dùng hạ tầng test riêng. Kỹ sư có thể không nghĩ đến nó. Người khác chỉ ra trong code review và gửi tài liệu giới thiệu, nhưng đọc tài liệu là hoạt động *nói về* mục tiêu của anh ấy, nên anh ấy ít kết nối với nó hơn. Anh ấy thử lao vào dùng luôn, nhưng thấy khó tích hợp, vì module của mình không có ví dụ nào để bắt chước.

Đáng tiếc là [[Enacted experiences are hard to author|Trải nghiệm thể hiện khó để tác giả hóa]] và [[Enacted experiences are hard to distribute|Trải nghiệm thể hiện rất khó nhân rộng]]. Dù vậy, [[Enacted experiences have incredible potential as a mass medium|Trải nghiệm thể hiện có tiềm năng phi thường khi làm phương tiện đại chúng]]. Tôi xem đây là lời hứa trung tâm của các phương tiện kiểu Primer: [[The Primer++ is embedded in a field, bootstrapping participation through enacted experience|Primer++ nằm bên trong một lĩnh vực, khởi động sự tham dự qua trải nghiệm thể hiện]].