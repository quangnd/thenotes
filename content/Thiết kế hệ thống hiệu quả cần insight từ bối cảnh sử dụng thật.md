---
aliases:
  - Effective system design requires insights drawn from serious contexts of use
---

Nguyên mẫu thô sơ rất tốt: nó cho phép lặp nhanh, đánh giá nhanh. Nhưng nhiều insight quan trọng chỉ xuất hiện trong bối cảnh của một bài toán sáng tạo nghiêm túc, không phải bài toán về chính cái hệ thống đó. Đây là luận điểm chính của [[Hiểu biết sâu sắc qua việc làm]].

Nghe thì giống thực hành tiêu chuẩn: tất nhiên hệ thống phải được đánh giá. Nhưng phần lớn người thiết kế hệ thống không xem "nghiêm túc" một cách nghiêm túc: [[Những người tạo công cụ thường thiếu kết nối với một bối cảnh sử dụng nghiêm túc]].

Quan sát cách lý thuyết của bạn (được thể hiện qua hệ thống) va chạm với thực tế có thể đem lại insight cải thiện chính lý thuyết đó. Chất lượng của insight phụ thuộc vào bối cảnh hệ thống được dùng. Nếu hệ thống không được sử dụng nghiêm túc, insight thu được sẽ na ná thứ mà một nhà lý thuyết thuần túy cũng có thể nghĩ ra, không cần dựng hệ thống làm gì.

Pixar là ví dụ hay về một tổ chức tự tạo ra bối cảnh sử dụng nghiêm túc, và bối cảnh đó dẫn dắt thiết kế hệ thống: [[Phim và phát triển công nghệ của Pixar hoạt động như các bánh đà kết nối]].

Thách thức thường gặp:
- [[Những người tạo công cụ giỏi thường không phải người sử dụng công cụ giỏi, và ngược lại]]
- [[Nhóm nghiên cứu công cụ tư duy cần đủ năng lực để xây nguyên mẫu dùng được cho công việc nghiêm túc]]

Lý thuyết liên quan:
- [[Môi trường khai phóng mạnh mẽ thường xuất hiện như sản phẩm phụ của các dự án theo đuổi mục đích có ý nghĩa nội tại]]
- [[Các môi trường do tác giả tạo ra bị ảnh hưởng đáng kể bởi động lực của tác giả]]
- [[Môi trường khai phóng mạnh mẽ tập trung vào người dùng chuyên gia]]

---

> [!info]- Tài liệu tham khảo
> Matuschak, A., & Nielsen, M. (2019). How can we develop transformative tools for thought? Truy cập ngày 2 tháng 12, 2019, từ https://numinous.productions/ttft
> 
> - Cụ thể: giả sử bạn muốn xây dựng công cụ cho chủ đề X (ví dụ X = hình học vi phân). Trừ khi bạn thực sự tham gia sâu vào việc làm chủ đề đó, gần như không thể dựng được công cụ tốt. Nó giống như cố làm ra dụng cụ mộc mới mà bản thân không hề đóng đồ mộc. Có lẽ đây là một phần lý do các công cụ như *Mathematica* hoạt động khá tốt: nhà thiết kế chính, Stephen Wolfram, có mối quan tâm nghiên cứu thực sự trong toán học và vật lý. Tất nhiên, không phải phần nào của *Mathematica* cũng tốt như nhau; có phần cảm giác như đồ chơi, và có vẻ đó là những phần *không* được dùng nghiêm túc bên trong chính công ty.
> 
>   (Concretely: suppose you want to build tools for subject X (say X = differential geometry). Unless you are deeply involved in practicing that subject, it's going to be extremely difficult to build good tools. It'll be much like trying to build new tools for carpentry without actually doing any carpentry yourself. This is perhaps part of why tools like *Mathematica* work quite well – the principal designer, Stephen Wolfram, has genuine research interests in mathematics and physics. Of course, not all parts of *Mathematica* work equally well; some parts feel like toys, and it seems likely those are the ones *not* being used seriously internal to the company.)