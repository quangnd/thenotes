---
aliases:
  - To what extent can application prompts supplant recall prompts in the mnemonic medium_
created: 2026-05-26
modified: 2026-05-26
---

[[Phương tiện ghi nhớ có thể giúp người đọc áp dụng những gì họ đã học qua prompt ứng dụng đơn giản]]. Với các câu hỏi như vậy được triển khai, đến mức độ nào người ta cũng cần các câu hỏi gợi nhớ nguyên tử truyền thống?

Hãy tưởng tượng chúng ta đang trong một khóa học giải tích trung học, và bạn vừa học rằng e là hàm có đạo hàm bằng chính nó. Nếu bài học đó được viết theo [[Phương tiện ghi nhớ]], chúng ta có thể hỏi những câu hỏi gợi nhớ này:

H. Hàm nào có đạo hàm bằng chính nó?
Đ. `e`
H. Đạo hàm của `f(x) = e^x` là gì?
Đ. `e^x`

Nhưng chúng ta cũng có thể tưởng tượng đóng khung điều này như một câu hỏi ứng dụng.

H. Đạo hàm của `e^8x` là gì?
Đ. `8e^8x` Giải thích: đạo hàm của `e^x` bằng chính nó

Nếu chúng ta chỉ hỏi một câu hỏi duy nhất này, tôi không nhất thiết kỳ vọng kiến thức khai báo của họ về `e` sẽ trở nên vững chắc: họ có thể sẽ ghi nhớ câu trả lời cho câu hỏi này. [[Câu hỏi ứng dụng nên thay đổi khi lặp lại]], vì vậy hãy tưởng tượng thay vào đó chúng ta cũng hỏi một số biến thể như:

H. Cho `f(x) = 14e^[x]`. `df/dx` là bao nhiêu?
Đ. `14e^[x]` Giải thích: đạo hàm của `e^x` bằng chính nó

Hãy tưởng tượng rằng độc giả có thể giải quyết được vấn đề này và cũng như một số biến thể khác, và hiện tại đã qua một tháng kể từ bài học ban đầu. Hãy quay lại các câu hỏi gợi nhớ chúng ta đã đề xuất. Chúng ta có kỳ vọng độc giả nhớ lại: "Hàm nào có đạo hàm bằng chính nó?" Tôi nghĩ điều đó có thể xảy ra… nhưng tôi nghi ngờ rằng độ chính xác của các biến thể sẽ tương quan chặt chẽ hơn với nhau so với độ chính xác trên câu hỏi gợi nhớ đó.

Hiểu e theo các tính chất khái niệm của nó khác với hiểu e theo thuật ngữ thủ tục. Tôi nghi ngờ rằng việc bao gồm cả hai loại câu hỏi sẽ có thể dẫn đến các mã hóa tinh chỉnh phong phú hơn.

Bây giờ, chúng ta có kỳ vọng độc giả có thể trả lời câu hỏi gợi nhớ được đề xuất: "Đạo hàm của `f(x) = e^x` là gì?" Tôi kỳ vọng như vậy, với xác suất cao: câu hỏi đó có thể được hiểu như một câu hỏi ứng dụng tầm thường, xét cho cùng, và độc giả đã giải được các biến thể khó hơn.

Điều này có nghĩa là câu hỏi gợi nhớ này không cần thiết khi có những câu hỏi ứng dụng đó không? Hãy xem xét: nếu độc giả *không* trả lời được các câu hỏi ứng dụng đó một cách nhất quán thì sao? Biến thể đầu tiên cũng đòi hỏi áp dụng quy tắc dây chuyền (và kiến thức rằng `d[kx]/dx = kx`). Biến thể thứ hai đòi hỏi hiểu cú pháp `df/dx`. Đây là những vấn đề phức tạp hơn.

Khi một độc giả quên câu trả lời cho một câu hỏi gợi nhớ, họ nhìn vào câu trả lời và cố nhớ lại nó cho lần sau. Nếu các câu hỏi nguyên tử và lịch trình được hiệu chỉnh tốt, điều này thường sẽ có tác dụng! Nhưng nếu một độc giả không trả lời được câu hỏi ứng dụng, họ không thể chỉ nhìn vào câu trả lời và cố nhớ lại nó cho lần sau: [[Câu trả lời cho các câu hỏi ứng dụng không nên được rút ra từ trí nhớ]]. Họ phải phân tích câu trả lời (có thể bao gồm giải thích của nó), nhận ra điều họ không nhớ, và cố gắng nhớ lại phần đó lần sau. Điều này khó hơn nhiều so với những gì cần thiết cho một câu hỏi gợi nhớ. Một độc giả vẫn còn mơ hồ về quy tắc dây chuyền có thể không chú ý đến sự bất lực của họ trong việc nhớ lại đạo hàm của `e^x`. Không có các câu hỏi hướng đến gợi nhớ riêng biệt, câu trả lời của họ trên câu hỏi ứng dụng này có thể vẫn không đáng tin cậy trong một thời gian dài.

Sẽ rất thú vị nếu thực hiện các thí nghiệm thực nghiệm về chủ đề này! Độ chính xác câu hỏi ứng dụng của độc giả bị ảnh hưởng như thế nào khi các câu hỏi gợi nhớ liên quan bị loại bỏ?

Một ví dụ thực nghiệm thú vị là [[Execute Program]]: [[Các câu hỏi của Execute Program hoạt động vừa như câu hỏi ứng dụng vừa như câu hỏi nhớ lại]].
