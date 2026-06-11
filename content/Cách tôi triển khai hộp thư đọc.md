---
aliases:
  - My implementation of a reading inbox
created: 2026-05-26
modified: 2026-06-11
---

Ghi chú này mô tả hệ thống triển khai [[Hộp thư đọc để thu thập tài liệu tham khảo có thể hữu ích]].

Việc đọc có nhiều dạng, và các công cụ khác nhau phù hợp để ghi lại và đọc những loại phương tiện khác nhau. Nhưng tôi "xử lý" mọi mục từ hộp thư đến này cùng một lúc. [[Hộp thư không nên chia thành nhiều nơi]], nên tôi tạo một hộp thư đến "ảo" trình bày một lớp thống nhất trên các mục này.

### Trang web (Web pages)
Cơ sở dữ liệu được quản lý bằng Pocket. Tôi có thể thêm trang qua tiện ích mở rộng trình duyệt trên máy tính và di động.

Tôi chọn Pocket vì nó miễn phí, có API khá tốt, tiện ích mở rộng tốt, và có thể hoạt động như một trình quản lý bookmark.

Tôi lưu trữ trang web bằng cách archive chúng; tôi xóa chúng bằng cách delete chúng.

### PDF
Tôi lưu PDF vào `~/Documents/Archive/Inbox`. Tôi có một workflow Alfred để sao chép hoặc di chuyển PDF đang mở trong Preview vào thư mục này.

Tôi đọc PDF trong Skim vì nó hỗ trợ liên kết đến các vị trí cụ thể và có thể xuất annotation.

Tôi lưu trữ PDF bằng cách di chuyển chúng vào `~/Documents/Archive` và thêm chúng vào Zotero. Tôi xóa chúng bằng cách xóa file.

### E-book
Tôi lưu e-book vào `~/Documents/Archive/Inbox`.

Tôi đọc e-book trong Clearview, nhưng tôi ghét nó (xem [[Tất cả phần mềm đọc EPUB trên máy tính để bàn đều tệ]]).

Tôi lưu trữ e-book bằng cách di chuyển chúng vào `~/Documents/Archive` và thêm chúng vào Zotero. Tôi xóa chúng bằng cách xóa file.

### Sách vật lý (Physical books)
Tôi lưu một tệp .bib đại diện cho cuốn sách vào `~/Documents/Archive/Inbox`. Tôi có một Shortcut để làm việc này nhanh chóng.

Tôi lưu trữ e-book bằng cách di chuyển chúng vào `~/Documents/Archive`, sau đó chạy `file_epub.sh` để đổi tên theo metadata. Sau đó tôi xóa mục của chúng khỏi tệp `.bib` trong thư mục `Inbox`.
