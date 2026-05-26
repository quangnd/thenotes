---
aliases:
  - Execute Program không có các gợi ý không thực thi được
---

[[Readers answer Execute Program’s prompts by executing a program|Người đọc trả lời các gợi ý của Execute Program bằng cách thực thi một chương trình]]. [[Execute Program]] không có bất kỳ loại gợi ý nào khác.

Ví dụ, một bài học về biểu thức chính quy có thể có gợi ý này:

> Q. Kết quả đầu ra của `/a..b/.test("a\ncb")` là gì?
> A. `false`

Người đọc sẽ trả lời gợi ý này bằng cách thực sự nhập `false` vào REPL và thực thi biểu thức.

Bài học đó không thể có gợi ý [[Spaced repetition memory system|hệ thống bộ nhớ lặp lại ngắt quãng]] điển hình hơn này:

> Q. Ký tự nào `.` *không* khớp (trong nhiều triển khai)?
> A. `\n`

Các bài học chủ yếu mang tính khái niệm (ví dụ [SQL Constraint Analysis](https://www.executeprogram.com/courses/sql/lessons/constraint-analysis)) không phù hợp tốt với mô hình này.

Vì Execute Program chỉ có một loại gợi ý: [[Execute Program’s prompts act both as application prompts and recall prompts|Các gợi ý của Execute Program vừa đóng vai trò là gợi ý ứng dụng vừa là gợi ý nhớ lại]].

---

Q. Ví dụ về một gợi ý mà [[Execute Program]] không thể mã hóa là gì?
A. Ví dụ: "Q. Sự khác biệt giữa `*` và `+` là gì? A. `*` cho phép không khớp" (e.g. "Q. What's the difference between `*` and `+`? A. `*` permits zero matches")

Q. Tại sao bài học phân tích ràng buộc SQL của [[Execute Program]] không thể sử dụng hệ thống lặp lại ngắt quãng của nó?
A. Bài học đó chủ yếu mang tính khái niệm, và các ý tưởng của nó khó mã hóa thành các biểu thức có thể thực thi. (That lesson is mostly conceptual, and its ideas are difficult to encode as executable expressions.)

---

#### Tài liệu tham khảo (References)

Conversation với Gary Bernhardt, 2020-03-24
