---
aliases:
  - Human channel capacity increases with bits-per-chunk
---
Một giải pháp phổ biến cho [[Dung lượng kênh của con người với tư cách bộ xử lý thông tin]] dường như là thực hiện một chuỗi các quan sát nhỏ hơn, thay vì một phán đoán tuyệt đối phức tạp duy nhất. Điều này chỉ hoạt động nếu bạn có thể giữ chuỗi trong đầu, vì vậy nó bị giới hạn bởi [[Khoảng bộ nhớ làm việc]]. May mắn thay, [[Dung lượng bộ nhớ làm việc phần lớn độc lập với độ phức tạp của mục]]. Vì vậy bạn có thể tăng dung lượng kênh hiệu quả bằng cách tăng số bit trong mỗi khối quan sát ([[Các mảnh trong nhận thức con người]]).

Trong hình này mô tả dữ liệu từ Pollack (1953), dung lượng kênh mở rộng gần như tuyến tính với số bit trên mỗi khối (Miller, 1956, tr. 92).

![](Attachments/D1D6C134-0ADF-461B-A6CB-3207BCE86933.png)

Hiệu ứng này vẫn bị giới hạn bởi [[Khoảng phán đoán tuyệt đối]], vì vậy để mở rộng số bit trên mỗi khối vượt quá 5, bạn sẽ cần làm cho các khối đa chiều ([[Dung lượng kênh của con người tăng theo số chiều kích thích]]).

---

H. Dung lượng kênh của con người thay đổi như thế nào đối với một chuỗi các phần tử, khi số bit truyền trong mỗi phần tử tăng?
Đ. Nó tăng gần như tuyến tính.

H. Tại sao việc phạm vi bộ nhớ làm việc gần như độc lập với phạm vi phán đoán tuyệt đối lại quan trọng?
Đ. Nó gợi ý rằng chúng ta có thể giữ nhiều thông tin hơn trong bộ nhớ làm việc bằng cách tăng kích thước "khối" của các mục được giữ trong bộ nhớ.

---

#### Tham khảo
Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63(2), 81–97. https://doi.org/10.1037/h0043158 [[Miller - Con số kỳ diệu bảy, cộng hoặc trừ hai]]

Pollack, I. (1953). Assimilation of Sequentially Encoded Information. The American Journal of Psychology, 66(3), 421–435. JSTOR. https://doi.org/10.2307/1418237
