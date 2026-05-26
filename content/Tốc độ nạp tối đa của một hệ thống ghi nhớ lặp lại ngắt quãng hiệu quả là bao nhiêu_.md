---
aliases:
  - What’s the maximum intake rate of an efficient spaced repetition memory system_
---

Giả sử tôi thêm 40 thẻ mới mỗi ngày, luôn trả lời đúng tất cả trong mỗi lần ôn, và khoảng cách giữa các lần ôn giãn theo lịch cố định của Quantum Country. Tới mốc một năm, tôi sẽ ôn:

- thẻ thêm 5 ngày trước
- thẻ thêm 5+14=19 ngày trước
- thẻ thêm 19+30=49 ngày trước
- thẻ thêm 49+60=109 ngày trước
- thẻ thêm 109+120=229 ngày trước

Vậy trường hợp này tôi ôn 200 thẻ. Trung bình sáu giây mỗi thẻ, tức 20 phút mỗi ngày. Nếu giới hạn ở mười phút, tôi chứa được 100 thẻ, tức khoảng 20 thẻ mới mỗi ngày.

Do tăng theo lũy thừa, sang năm thứ hai con số không đổi nhiều. Nếu tôi tiếp tục thêm 40 thẻ/ngày, sau khoảng 15.000 thẻ trong năm tới, tôi sẽ ôn 240 thẻ mỗi ngày (khoảng 24 phút). Muốn giữ giới hạn mười phút thì còn 17 thẻ mới mỗi ngày. Năm thứ ba thêm 40 thẻ/ngày dưới giả định này; năm thứ tư không thêm được gì.

Tất nhiên, mọi tính toán giả định tôi trả lời đúng mọi câu hỏi mọi lúc. Giả sử tỷ lệ lỗi 10%, tới mốc 1 năm tôi sẽ ôn 241 thẻ thay vì 200. Không tệ lắm. Con số này giảm ngưỡng 10 phút của tôi từ 20/ngày (7.300/năm) xuống 16/ngày (5.800/năm). Tỷ lệ lỗi 5% cho 18/ngày (khoảng 6.500/năm). Khác biệt đủ lớn để đáng theo đuổi, nhưng không phải yếu tố quyết định. Tỷ lệ lỗi 20% cho thông lượng 13/ngày (khoảng 4.800/năm).

Nói cách khác, nếu giảm được tỷ lệ lỗi từ 20% xuống 5%, bạn nạp thêm được 1/3 số thẻ trong cùng thời lượng ôn tập.

```
const p = 0.9;
const np = 1 - p;
const newCards = 40;
const ease = 2.5;
const max = 365;

const queue = [{baseDays: 5, factor: 1}];
let total = 0;
while (queue.length > 0) {
	const {baseDays, factor} = queue.shift();
	if (baseDays > max || factor < 0.0001) {
		continue;
	}
	total += factor;
	queue.push({baseDays: baseDays * ease, factor: factor * p}, {baseDays: Math.max(5, baseDays / ease), factor: factor * np});
}
console.log(total * newCards);
```