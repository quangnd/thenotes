---
aliases:
  - Người đọc trả lời các câu hỏi của Execute Program bằng cách thực thi một chương trình
---
Giống như [[Mnemonic medium|Phương tiện ghi nhớ]], các bài học của Execute Program xen kẽ văn xuôi với các câu hỏi tương tác. Nhưng ý tưởng trung tâm mang lại cho Execute Program cái tên của nó là mọi tương tác đều liên quan đến việc thực thi một chương trình bên trong một trình thông dịch nhúng. Thực tế, [[Execute Program doesn’t have non-executable prompts|Execute Program không có câu hỏi không thể thực thi]].

Ví dụ, một bài học có thể bao gồm vài đoạn giới thiệu khái niệm rằng trong SQL, bạn có thể chọn chỉ một cột cụ thể bằng cách sử dụng `SELECT column*name`. Sau đó nó có thể đưa ra câu hỏi này:

```
exec(`CREATE TABLE cats (name STRING, age INTEGER)`);
exec(`INSERT INTO cats (name, age) VALUES ("Boromir", 3), ("Aragorn", 15)`);
exec(`SELECT name FROM cats`)
> 
```

Con trỏ của người đọc được đặt ở dòng cuối cùng; họ được yêu cầu nhập kết quả mà biểu thức ở dòng đầu tiên sẽ đánh giá ra. Execute Program sau đó đánh giá biểu thức đầu vào của người đọc (tức là dưới dạng Javascript) và so sánh giá trị kết quả với giá trị kiểm tra.

Điều này *trông* giống như một thẻ ghi nhớ kiểu Quizlet, trong đó người ta phải gõ đúng câu trả lời, nhưng thực ra không phải. Đây là một trình thông dịch thực sự, sẽ thực sự đánh giá chương trình của bạn. Vì vậy bạn có thể viết `[{name: "Boromir"}, {name: "Aragorn"}]` hoặc `["Boromir", "Aragorn"].map(n => ({name: n})` — cả hai đều đúng. Tôi thích rằng mô hình thiết kế này đặt các bài học gần hơn với bối cảnh xác thực: [[Enabling environments focus on doing what’s enabled|Môi trường khai phóng tập trung vào việc thực hiện điều được khai phóng]].

Các câu hỏi phức tạp hơn, được gọi là "bài toán," cung cấp cho người đọc một danh sách mã nguồn và một "biểu thức mục tiêu" — giá trị mong muốn cho dòng cuối cùng. Ví dụ:

```
function adds2(input: number) {
}
adds2(4)

// GOAL: 6
```

Người đọc được yêu cầu sửa đổi danh sách mã nguồn sao cho biểu thức mục tiêu được tạo ra. Khi người đọc sẵn sàng, họ thực thi chương trình của mình; nó được đánh giá và đầu ra được so sánh với giá trị mục tiêu.

Một ý tưởng liên quan, tham vọng hơn: [[What might it mean to situate games like Shenzhen I]O inside pro environments like an IDE?|Điều gì sẽ xảy ra nếu đặt các trò chơi như Shenzhen I/O vào trong môi trường chuyên nghiệp như IDE?]]

Cũng liên quan: [[Executable books|Sách thực thi]]

----------

H. Các câu hỏi của Execute Program yêu cầu người đọc nhập câu trả lời. Tương tác này khác với Quizlet như thế nào?
Đ. Câu trả lời được đánh giá trong một trình thông dịch thực sự, không chỉ so sánh nguyên văn.

H. Tại sao việc câu trả lời cho các câu hỏi của Execute Program được đánh giá chứ không chỉ so sánh nguyên văn lại quan trọng?
Đ. Nó cho phép người đọc một sự linh hoạt xác thực trong việc giải quyết các câu hỏi.
