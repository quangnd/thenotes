---
created: 2026-06-12
draft: true
---
## Workflow đề nghị

Tạo output trước, ép bản thân dự đoán chất lượng của output, dùng AI để tìm khoảng cách giữa đánh giá của mình và đánh giá của chuyên gia, rồi chuyển những bài học lặp lại thành heuristic và checklist. Khi đó phản hồi không còn nằm ở output nữa mà nằm ở sự tiến hoá của mental model.

```
Practice  
-> self review  
-> AI review  
-> extract heuristic  
-> update checklist  
-> practice again
```

Trong knowledge work, mục tiêu không phải là tìm "đáp án đúng" mà là tìm "mô hình đánh giá tốt hơn".

## Các vấn đề

### Vấn đề 1: Lấy tiêu chí đánh giá ở đâu?

Thực ra expert cũng thường không có tiêu chí hoàn chỉnh.

Ví dụ:

"Một requirement tốt là gì?"

Nếu hỏi 10 PM senior, mày sẽ nhận được 10 câu trả lời hơi khác nhau.

Nhưng có một cách.

Thay vì hỏi:

Requirement này tốt hay không?

Hỏi:

Requirement này có thể thất bại theo những cách nào?

Đây là cách nhiều ngành chuyên nghiệp đánh giá.

Ví dụ requirement:

Thay vì chấm điểm 8/10.

Hỏi:

Developer có thể hiểu sai không?
Tester có thể viết test case không?
Stakeholder có thể phản đối vì thiếu thông tin không?
Có edge case nào bị bỏ sót không?

Lúc này tiêu chí được sinh ra từ failure mode.

Ví dụ RCA.

Đừng hỏi:

RCA này hay chưa?

Hỏi:

Có khả năng nhầm correlation thành causation không?
Có nguyên nhân nào chưa được xem xét?
Có bằng chứng phản bác giả thuyết hiện tại không?

Đây là những câu hỏi chất lượng cao hơn nhiều.

Nói cách khác:

Trong knowledge work:

```
Quality Criteria
≈
Collection of Failure Modes
```

### Vấn đề 2: Không có expert solution để so sánh

Tao nghĩ đây là một hiểu lầm phổ biến về deliberate practice.

Trong cờ vua:

- Có nước đi tốt nhất.

Trong PM:

- Không có requirement tốt nhất.

Thay vào đó có:

- requirement A
- requirement B
- requirement C

Mỗi cái trade-off khác nhau.

Cho nên đừng tìm "expert answer".

Tìm "expert reasoning".

---

Ví dụ.

Mày viết requirement.

Đưa cho AI:

> Hãy đóng vai Principal PM.
> 
> Đừng sửa requirement.
> 
> Hãy liệt kê những câu hỏi mà anh ta sẽ đặt ra sau khi đọc.

Ví dụ AI trả về:

```
- Nếu merchant mất mạng thì sao?- Nếu terminal reboot giữa giao dịch thì sao?- KPI thành công là gì?
```

Đây mới là vàng.

Vì expert thường khác novice ở câu hỏi họ hỏi.

Không phải ở câu trả lời họ đưa.

---

## Tao nghĩ AI đang tạo ra một dạng deliberate practice mới

Ngày xưa:

```
My OutputvsExpert Output
```

Ngày nay:

```
My ThinkingvsExpert Thinking
```

Cái thứ hai dễ tạo hơn nhiều.

---

Ví dụ cụ thể với PM.

Mày đang làm risk assessment.

Đừng yêu cầu AI:

> Đánh giá tài liệu này.

Hãy yêu cầu:

> Một PM 15 năm kinh nghiệm sẽ lo lắng điều gì khi đọc tài liệu này?

Hoặc:

> Một auditor sẽ hỏi gì?

Hoặc:

> Một architect sẽ phản biện điểm nào?

Mày sẽ thu được các góc nhìn khác nhau.

---

## Tao nghĩ có một cấp độ cao hơn nữa

Sau khoảng 20-30 lần luyện.

Đừng quan tâm output nữa.

Theo dõi:

> Những câu hỏi nào tao quên hỏi?

Ví dụ.

Lần nào AI cũng nhắc:

```
rollback plan
```

Mày quên.

Lần sau lại quên.

Lần sau nữa vẫn quên.

Đây là dấu hiệu của một lỗ hổng tư duy.

---

Nếu tao phải thiết kế deliberate practice cho PM, tao sẽ không lưu:

- requirement
- RCA
- risk log

Tao sẽ lưu:

```
Những câu hỏi đáng lẽ phải hỏi.
```

Ví dụ:

```
Nếu hệ thống timeout thì sao?Ai là owner?Rollback thế nào?Có metric chứng minh thành công không?
```

Sau vài tháng, mày sẽ có một thư viện vài trăm câu hỏi.

Và điều thú vị là:

> Expert thường không hơn người khác ở số câu trả lời họ biết.
> 
> Họ hơn ở chất lượng câu hỏi họ tự động đặt ra khi nhìn một vấn đề.

Theo tao, đó mới là thứ gần nhất với "deliberate practice cho knowledge work" mà AI làm được hiện nay. AI không nhất thiết cho mày đáp án chuyên gia. AI giúp mày nhìn thấy những câu hỏi mà chuyên gia có thể đã hỏi, còn mày thì chưa. Khi khoảng cách về câu hỏi thu hẹp lại, khoảng cách về năng lực thường cũng thu hẹp theo.