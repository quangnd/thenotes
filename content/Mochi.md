[Mochi](https://mochi.cards/) là một [[Hệ thống viết ghi chú]] dựa trên web, lấy Markdown làm trung tâm, tích hợp [[Hệ thống ghi nhớ lặp lại ngắt quãng]]

Theo một nghĩa hạn chế, Mochi cố gắng thực hiện các ý tưởng được mô tả trong [[Phương tiện ghi nhớ có thể được mở rộng sang ghi chú cá nhân]].

Nó được đánh bóng khá đẹp về mặt hình ảnh, mặc dù vẫn còn khá chưa hoàn chỉnh như một sản phẩm. Dự án bắt đầu vào tháng 2 năm 2019 và đang được phát triển tích cực với các bản phát hành thường xuyên tính đến tháng 3 năm 2020.

#### Tạo và nhập thẻ từ ghi chú (Generating and importing cards from notes)

"Ghi chú" và "bộ bài" là các đối tượng riêng biệt trong hệ thống này. Các ghi chú có thể được *liên kết* đến các thẻ trong bộ bài. Các ghi chú cũng có thể chứa Markdown cho phép người dùng (một cách rõ ràng) "tạo thẻ từ ghi chú." Cú pháp (một ghi chú ba mặt):

```
**Mochi** (definition syntax)
: *n.* (餅) A Japanese rice cake made from glutinous rice.
: *n.* (持ち) to hold; to keep; to last

And this is a paragraph with a {{cloze deletion}}. This is an alternate syntax it supports:

side 1
---
side 2
---
side 3 (etc)
```

Thật không may, sự tích hợp giữa hệ thống lặp lại ngắt quãng và các ghi chú không liền mạch. "Tạo thẻ từ ghi chú" là một thao tác thủ công, không idempotent. Nếu bạn thêm một thẻ mới vào ghi chú, sau đó nhấp lại vào nút "tạo thẻ từ ghi chú", nó sẽ tạo ra thẻ trùng lặp. Thẻ trùng lặp sẽ không có trạng thái; nó sẽ được coi là "chưa học."

Theo những gì tôi có thể nói, cách tiếp cận kết nối giữa ghi chú và lời nhắc lặp lại ngắt quãng này chỉ hoạt động một lần. Bạn có thể viết một ghi chú mới, sau đó tạo các lời nhắc, nhưng các chỉnh sửa trong tương lai sẽ gây ra vấn đề. Cách tiếp cận này làm cho [[Ghi chú thường xanh]] trở nên không thể.

#### Triển khai SRS (SRS implementation)

Sử dụng SM-2 đã được sửa đổi: easing không được điều chỉnh động (mặc dù có thể được đặt thủ công theo từng bộ bài), và quên một thẻ sẽ giảm khoảng thời gian xuống một nửa thay vì đặt lại.

Có giai đoạn "học" cho các thẻ mới, giống như trong Anki. "Thẻ mới" được xử lý riêng biệt so với "Đến hạn hôm nay" trong UI. Đầu tiên, bạn phải trả lời đúng một thẻ mới, *sau đó* nó được thêm vào ngăn xếp của bạn đến hạn vào ngày hôm sau.

#### Thẻ nhúng trực tiếp (Directly-embedded cards)

Vào ngày 2019/11/18, đã thêm một tính năng cho phép nhúng trực tiếp UI thẻ SRS vào ghi chú. Chúng phải đã tồn tại riêng biệt trong một bộ bài; cú pháp khá lạ. Đây là một thao tác transclusion thô.

#### Mô hình kinh doanh (Business model)

Sản phẩm miễn phí khi sử dụng dưới dạng ứng dụng desktop. Đồng bộ hóa và ứng dụng web (để sử dụng trên thiết bị di động) có giá \$3/tháng (danh nghĩa giảm từ \$5/tháng, mặc dù đã ở mức giá này trong nhiều tháng). Một mô hình kinh doanh khó khăn: anh ấy cần 3K người dùng tích cực để đạt \$100K ARR.

Tác giả là {Matthew Steedman}. Có trụ sở tại New York, chủ yếu làm việc tại các agency (bao gồm Code and Theory). Bằng BFA một phần về quảng cáo/thiết kế đồ họa.
