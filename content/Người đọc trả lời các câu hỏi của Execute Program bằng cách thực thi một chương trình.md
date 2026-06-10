---
aliases:
  - Readers answer Execute Program’s prompts by executing a program
created: 2026-05-26
modified: 2026-06-10
---
Giống như [[Công cụ ghi nhớ]], các bài học của Execute Program xen kẽ văn xuôi với các câu hỏi tương tác. Nhưng ý tưởng trung tâm, cũng là nguồn gốc cái tên Execute Program, là mọi tương tác đều liên quan đến việc thực thi một chương trình trong một trình thông dịch nhúng. Thực tế, [[Execute Program không có các gợi ý không thực thi được]].

Ví dụ, một bài học có thể gồm vài đoạn giới thiệu khái niệm rằng trong SQL, bạn có thể chọn riêng một cột bằng `SELECT column*name`. Sau đó, nó có thể đưa ra câu hỏi này:

```
exec(`CREATE TABLE cats (name STRING, age INTEGER)`);
exec(`INSERT INTO cats (name, age) VALUES ("Boromir", 3), ("Aragorn", 15)`);
exec(`SELECT name FROM cats`)
> 
```

Con trỏ của người đọc được đặt ở dòng cuối. Họ được yêu cầu nhập kết quả mà biểu thức ở dòng đầu tiên sẽ trả về. Sau đó Execute Program đánh giá đầu vào của người đọc, tức dưới dạng Javascript, rồi so sánh giá trị kết quả với giá trị kiểm tra.

Điều này *trông* giống một thẻ ghi nhớ kiểu Quizlet, nơi người dùng phải gõ đúng câu trả lời, nhưng thật ra không phải. Đây là một trình thông dịch thật, và nó thật sự đánh giá chương trình của bạn. Vì vậy, bạn có thể viết `[{name: "Boromir"}, {name: "Aragorn"}]` hoặc `["Boromir", "Aragorn"].map(n => ({name: n})`. Cả hai đều đúng. Tôi thích mô hình thiết kế này vì nó đặt bài học gần hơn với bối cảnh xác thực: [[Môi trường khai phóng tập trung vào việc thực hiện điều được khai phóng]].

Các câu hỏi phức tạp hơn, được gọi là "bài toán", cung cấp cho người đọc một danh sách mã nguồn và một "biểu thức mục tiêu", tức giá trị mong muốn cho dòng cuối. Ví dụ:

```
function adds2(input: number) {
}
adds2(4)

// GOAL: 6
```

Người đọc được yêu cầu sửa mã nguồn sao cho tạo ra biểu thức mục tiêu. Khi sẵn sàng, họ thực thi chương trình của mình. Chương trình được đánh giá và đầu ra được so sánh với giá trị mục tiêu.

Một ý tưởng liên quan, tham vọng hơn: [[What might it mean to situate games like Shenzhen I]O inside pro environments like an IDE?|Điều gì sẽ xảy ra nếu đặt các trò chơi như Shenzhen I/O vào trong môi trường chuyên nghiệp như IDE?]]

Cũng liên quan: [[Sách thực thi]].

----------

H. Các câu hỏi của Execute Program yêu cầu người đọc nhập câu trả lời. Tương tác này khác với Quizlet như thế nào?
Đ. Câu trả lời được đánh giá trong một trình thông dịch thật, không chỉ được so sánh nguyên văn.

H. Tại sao việc câu trả lời cho các câu hỏi của Execute Program được đánh giá, thay vì chỉ so sánh nguyên văn, lại quan trọng?
Đ. Vì nó cho người đọc sự linh hoạt thật sự khi giải quyết câu hỏi.
