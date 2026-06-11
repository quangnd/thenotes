---
aliases:
  - To what extent can application prompts supplant recall prompts in the mnemonic medium_
created: 2026-05-26
modified: 2026-06-11
---

[[Công cụ ghi nhớ có thể giúp người đọc vận dụng điều đã học bằng các câu hỏi đơn giản]]. Khi đã có những câu hỏi như vậy, ta còn cần các câu hỏi gợi nhớ nguyên tử truyền thống đến mức nào?

Hãy tưởng tượng ta đang trong một khóa học giải tích trung học, và bạn vừa học rằng `e^x` là hàm có đạo hàm bằng chính nó. Nếu bài học đó được viết theo [[Công cụ ghi nhớ]], ta có thể hỏi những câu hỏi gợi nhớ này:

H. Hàm nào có đạo hàm bằng chính nó?
Đ. `e^x`
H. Đạo hàm của `f(x) = e^x` là gì?
Đ. `e^x`

Nhưng ta cũng có thể đóng khung điều này như một câu hỏi ứng dụng.

H. Đạo hàm của `e^8x` là gì?
Đ. `8e^8x` Giải thích: đạo hàm của `e^x` bằng chính nó

Nếu chỉ hỏi một câu hỏi duy nhất như vậy, tôi không chắc kiến thức khai báo của người đọc về `e` sẽ trở nên vững chắc. Họ có thể chỉ ghi nhớ câu trả lời cho câu hỏi này. [[Câu hỏi ứng dụng nên thay đổi khi lặp lại]], nên hãy tưởng tượng thay vào đó ta cũng hỏi một số biến thể như:

H. Cho `f(x) = 14e^[x]`. `df/dx` là bao nhiêu?
Đ. `14e^[x]` Giải thích: đạo hàm của `e^x` bằng chính nó

Hãy tưởng tượng người đọc giải được bài này, cũng như một số biến thể khác, và giờ đã qua một tháng kể từ bài học ban đầu. Quay lại các câu hỏi gợi nhớ đã đề xuất: ta có kỳ vọng người đọc nhớ được "hàm nào có đạo hàm bằng chính nó" không? Tôi nghĩ có thể. Nhưng tôi nghi ngờ rằng độ chính xác giữa các biến thể ứng dụng sẽ tương quan với nhau chặt hơn so với độ chính xác trên câu hỏi gợi nhớ đó.

Hiểu `e` qua các tính chất khái niệm của nó khác với hiểu `e` theo cách thao tác thủ tục. Tôi nghi ngờ rằng việc đưa vào cả hai loại câu hỏi có thể dẫn đến các mã hóa tinh chế phong phú hơn.

Bây giờ, ta có kỳ vọng người đọc trả lời được câu hỏi gợi nhớ "Đạo hàm của `f(x) = e^x` là gì?" không? Tôi kỳ vọng là có, với xác suất cao. Dù sao thì câu hỏi đó cũng có thể được hiểu như một câu hỏi ứng dụng tầm thường, và người đọc đã giải được các biến thể khó hơn.

Điều này có nghĩa là câu hỏi gợi nhớ đó không còn cần thiết khi đã có các câu hỏi ứng dụng không? Hãy xét trường hợp người đọc *không* trả lời nhất quán được các câu hỏi ứng dụng. Biến thể đầu tiên cũng đòi hỏi áp dụng quy tắc dây chuyền (và kiến thức rằng `d[kx]/dx = kx`). Biến thể thứ hai đòi hỏi hiểu cú pháp `df/dx`. Đây là những vấn đề phức tạp hơn.

Khi người đọc quên câu trả lời cho một câu hỏi gợi nhớ, họ nhìn vào đáp án và cố nhớ lại nó cho lần sau. Nếu các câu hỏi đủ nguyên tử và lịch trình được hiệu chỉnh tốt, cách này thường có tác dụng. Nhưng nếu người đọc không trả lời được câu hỏi ứng dụng, họ không thể chỉ nhìn vào đáp án rồi cố nhớ lại cho lần sau: [[Câu trả lời cho các câu hỏi ứng dụng không nên được rút ra từ trí nhớ]]. Họ phải phân tích đáp án (có thể gồm cả phần giải thích), nhận ra điều mình không nhớ, rồi cố nhớ lại phần đó vào lần sau. Việc này khó hơn nhiều so với điều cần làm với một câu hỏi gợi nhớ. Một người đọc vẫn còn mơ hồ về quy tắc dây chuyền có thể không nhận ra rằng họ cũng đang không nhớ đạo hàm của `e^x`. Nếu không có các câu hỏi riêng nhắm vào việc gợi nhớ, câu trả lời của họ cho câu hỏi ứng dụng này có thể vẫn thiếu ổn định trong một thời gian dài.

Sẽ rất thú vị nếu thực hiện các thí nghiệm thực nghiệm về chủ đề này. Độ chính xác của người đọc trên câu hỏi ứng dụng sẽ bị ảnh hưởng ra sao khi các câu hỏi gợi nhớ liên quan bị loại bỏ?

Một ví dụ thực nghiệm thú vị là [[Execute Program]]: [[Các câu hỏi của Execute Program hoạt động vừa như câu hỏi ứng dụng vừa như câu hỏi nhớ lại]].
