---
aliases:
  - All desktop EPUB readers are awful
created: 2026-05-26
modified: 2026-06-11
---

Thật đáng kinh ngạc khi phần mềm đọc sách điện tử trên máy tính để bàn lại tệ đến vậy.

Tôi đã dành thời gian đánh giá một loạt phần mềm trong khuôn khổ một chương trình lớn hơn nhằm [[Viết về thứ mình đọc]]. Tôi đã thử:

- Apple Books
- Kindle
- Calibre ebook-viewer
- ClearView
- Adobe Digital Editions
- FBReader (hầu như không hoạt động được)
- Kobo (về cơ bản không hoạt động được)

Không có giải pháp nào vừa hỗ trợ chú thích vừa có khả năng nhảy đến các vị trí cố định. Điều đó… thật sự tệ.

### Tham chiếu trang và vị trí
Các ứng dụng sau không có khả năng nhảy đến một vị trí cụ thể:
- Apple Books
- FBReader
- Kobo

Kindle cho phép nhảy đến một vị trí hoặc trang cụ thể, tùy cuốn sách. Dù theo cách nào, nó đều đảm bảo vị trí đó cố định.

Calibre cho phép nhảy đến một vị trí cố định (chỉ có nghĩa trong Calibre). Nó không có khái niệm số trang.

ClearView và ADE chỉ cho phép nhảy đến số trang phụ thuộc vào kích thước cửa sổ, nên không cố định.

### Hỗ trợ số trang
Không có phần mềm đọc nào hỗ trợ tiêu chuẩn EPUB 3 để ánh xạ số trang sách in sang số trang sách điện tử. Kindle hỗ trợ một biến thể độc quyền của tiêu chuẩn này.

### Khả năng lập trình
Trong số này, chỉ Calibre hỗ trợ nhảy đến một vị trí bằng lập trình, nên không thể tạo liên kết trực tiếp vào sách trong các phần mềm đọc khác.

ClearView có API riêng để nhảy đến một trang, nhưng các trang không cố định, nên điều đó không mấy hữu ích.

### Hỗ trợ chú thích
Calibre và FBReader không hỗ trợ chú thích. Các phần mềm còn lại hỗ trợ chú thích cơ bản, nhưng trong số đó chỉ ClearView cho phép xuất chú thích. Không phần mềm nào lưu chú thích theo cách để chương trình khác có thể dễ dàng truy cập bằng lập trình. Ở cấp giao diện người dùng, chỉ Apple Books có triển khai tương đối tốt.

### Nhiều cửa sổ
Không phần mềm đọc nào hỗ trợ nhiều chế độ xem trên cùng một cuốn sách. Không thể xem nhiều trang cùng lúc trong bất kỳ phần mềm nào. Thật điên rồ. [[Đọc song song gần như không thể trong đọc sách kỹ thuật số]]

### Đồng bộ hóa
Chỉ Kindle và Apple Books đồng bộ hóa trên các thiết bị. Triển khai của Kindle rất hạn chế: nó đồng bộ sách trên phần cứng Kindle và thiết bị iOS, nhưng không đồng bộ với Mac. Và nó không đồng bộ các đoạn đánh dấu hay siêu dữ liệu. Triển khai đồng bộ hóa của Apple Books gần như hoàn hảo.
