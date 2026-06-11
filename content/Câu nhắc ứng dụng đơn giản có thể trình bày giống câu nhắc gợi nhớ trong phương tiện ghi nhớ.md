---
aliases:
  - Simple application prompts can be presented the same way as recall prompts in the mnemonic medium
created: 2026-05-26
modified: 2026-06-11
---

[[Công cụ ghi nhớ có thể giúp người đọc vận dụng điều đã học bằng các câu hỏi đơn giản]]. Loại câu nhắc này có nhiều đặc điểm giống các câu nhắc gợi nhớ hiện tại của chúng tôi.

- Người đọc trả lời xong trong dưới 20 giây.
- Cảm giác không quá tốn sức.
- Người đọc có thể tự chấm điểm.
- Điểm nhị phân (đúng/sai) có lẽ là đủ.
- Hưởng lợi từ [[Hiệu ứng ngắt quãng]] (dù lịch trình có thể khác).
- "Tiến bộ" có thể được mô tả hợp lý là "trả lời đúng liên tục với các khoảng không học ngày càng dài".
- Dù [[Câu hỏi ứng dụng nên thay đổi khi lặp lại]], các biến thể đó vẫn có thể được gom vào một thực thể "câu hỏi" hoặc "bài tập" đơn lẻ, trong đó tiến bộ tích lũy khi từng phần được hoàn thành.
    - Lưu ý: cách này yêu cầu các biến thể về cơ bản phải thay thế được cho nhau, tức là cùng đo một biến ẩn về mặt khái niệm.
- Một câu đơn lẻ không hữu ích lắm, nhưng tiến bộ qua vài chục câu sẽ tạo nên việc học có ý nghĩa.
- Hưởng lợi từ việc xáo trộn và phân nhóm (một lần nữa, có thể với tham số khác).

Vì trải nghiệm của hai loại câu nhắc này có nhiều điểm chung, các giải pháp thiết kế cho câu nhắc gợi nhớ phần lớn cũng dùng được cho câu nhắc ứng dụng đơn giản. Tức là câu nhắc ứng dụng đơn giản có thể đưa vào môi trường ôn tập sẵn có của [[Hệ thống ghi nhớ lặp lại ngắt quãng]] mà không cần chỉnh sửa nhiều.

#### Khác biệt chức năng so với câu nhắc gợi nhớ

Nhìn từ góc độ hệ thống, câu nhắc ứng dụng khác câu nhắc gợi nhớ ở vài điểm.

- Hệ thống nên trình bày một cặp câu hỏi/câu trả lời khác nhau mỗi lần ([[Câu hỏi ứng dụng nên thay đổi khi lặp lại]]), được gom trong một thực thể "câu hỏi" hoặc "bài tập" đơn lẻ để tích lũy tiến bộ.
- Đôi khi cần kèm phần giải thích cách tạo ra câu trả lời. Phần giải thích không phải là "một phần" của câu trả lời: người đọc nên hiểu rằng họ không cần tự đánh dấu sai nếu tìm ra đáp án theo cách khác.
- Nếu người đọc trả lời sai câu nhắc ứng dụng, không nên bắt họ thử lại trong cùng phiên. Để giữ sự đa dạng, lần thử lại phải là một câu khác. Cách này tạo gánh nặng lớn hơn nhiều cho tác giả, hoặc sẽ khiến các biến thể quay vòng nhanh hơn nhiều. Liên quan: nếu thực thể "câu hỏi" hoặc "bài tập" được gom không có danh tính rõ ràng, người dùng sẽ hiểu câu thử lại là bài toán mới, không phải cơ hội làm lại bài cũ.

Không khác biệt nào trong số này quá nghiêm trọng.

#### Hàm ý tường thuật cho phương tiện ghi nhớ

Dù khác biệt chức năng tương đối nhỏ, các câu nhắc này buộc chúng tôi phải đổi cách mô tả [[Công cụ ghi nhớ]], cách đóng khung lời kêu gọi hành động, cách kể về tiến bộ, v.v.

Trên thực tế, tức là:

- sửa "gần như không cần nỗ lực nhớ những gì bạn đọc" thành "gần như không cần nỗ lực nhớ và áp dụng những gì bạn đọc".
- dùng cách nói chung hơn trong phần mô tả hành trình người dùng, ví dụ:
    - "bạn đã nhớ" -> "bạn đã trả lời được".
    - "nhớ" -> "trả lời đúng".
    - "củng cố trí nhớ của bạn về tài liệu" -> "củng cố sự nắm bắt của bạn về tài liệu".
    - v.v.
