---
aliases:
  - Vault maturity assessment and 20-hour research plan
created: 2026-06-11
modified: 2026-06-11
draft: true
tags:
  - vault/meta
  - research-plan
---

> [!note] Ghi chú meta (kết quả từ GPT 5.5 - effort: high)
> Ghi chú này lưu lại đánh giá vault và đề xuất phát triển trong phiên làm việc ngày 2026-06-11. Đây là bản nháp để định hướng nghiên cứu, không phải bản dịch từ Andy.

# Đánh giá trưởng thành vault và kế hoạch 20 giờ

## Snapshot

* Vault hiện có khoảng 472 ghi chú Markdown, khoảng 168k từ, và khoảng 2,012 liên kết nội bộ.
* Graph gần như đã kết nối thành một cụm lớn. Điều này cho thấy vault không còn là tập ghi chú rời rạc.
* Các hub mạnh nhất gồm [[Hệ thống ghi nhớ lặp lại ngắt quãng]], [[Công cụ ghi nhớ]], [[Ghi chú thường xanh]], [[Trải nghiệm thể hiện]], [[Môi trường khai phóng]].
* Điểm yếu lớn nhất không nằm ở cấu trúc liên kết, mà nằm ở lớp kiểm chứng cá nhân và tổng hợp cấp cao.

## Tổng quan vault

### Chủ đề chính

* Hệ thống ghi nhớ lặp lại ngắt quãng, SRS, câu nhắc, câu hỏi ứng dụng.
* [[Công cụ ghi nhớ]], phương tiện ghi nhớ, [[Quantum Country]], [[Execute Program]].
* [[Ghi chú thường xanh]], Zettelkasten, [[Hệ thống viết ghi chú]], công việc tri thức tích lũy.
* Đọc, đọc kỹ thuật số, hộp thư đọc, đọc tổng hợp.
* [[Môi trường khai phóng]], [[Trải nghiệm thể hiện]], game, [[Cuốn Primer Minh họa của Quý cô Trẻ]].
* Chuyên môn, luyện tập có chủ đích, bộ nhớ làm việc, chunking, biểu diễn tinh thần.
* [[Công cụ tư duy]], giao diện, tài trợ, hàng hóa công.
* [[Văn bản có chiều thời gian]], lập trình sự chú ý, phương tiện mở ra theo thời gian.

### Mô hình tư duy nổi bật

* Tư duy tích lũy: [[Công việc tri thức nên tích lũy]], không chỉ tạo kết quả tạm thời.
* Lập trình sự chú ý: SRS không chỉ để nhớ, mà để điều hướng chú ý theo thời gian. Xem [[Dùng lặp lại ngắt quãng để lập trình sự chú ý]].
* Hiểu qua hành động: môi trường tốt đặt người học vào việc thật, không chỉ giảng giải.
* Trải nghiệm thể hiện: người tham gia cảm thấy chính họ tạo ra trải nghiệm, dù trải nghiệm đó được thiết kế.
* Ghi chú như môi trường tư duy: ghi chú không phải nơi lưu trữ, mà là nơi phát triển khái niệm.
* Thiết kế từ bối cảnh thật: công cụ tốt cần insight từ việc dùng thật, không chỉ từ lý thuyết.

### Điểm mạnh lớn nhất

* Graph liên kết dày, có hub rõ, ít ghi chú cô lập.
* Nhiều ghi chú có tiêu đề dạng mệnh đề, tốt cho tư duy thường xanh.
* Lõi lý thuyết rõ: ghi nhớ, ghi chú, công việc tri thức, môi trường khai phóng.
* Có nền nguồn tương đối tốt từ Ericsson, Miller, Ahrens, Luhmann, Nielsen, Matuschak.
* Có nhiều câu hỏi mở. Đây là dấu hiệu tốt của hệ thống tri thức sống.

### Điểm yếu lớn nhất

* Vault vẫn phụ thuộc mạnh vào corpus của Andy Matuschak. Lớp trải nghiệm cá nhân của Mun còn mỏng.
* Một số hub quan trọng còn rất ngắn so với vai trò của chúng, đặc biệt là [[Công cụ tư duy]], [[Quantum Country]], [[Đọc gia tăng]].
* Thiếu MOC cho vài mảng lớn như đọc, công cụ tư duy, giao diện phần mềm, nghiên cứu thực nghiệm.
* Nhiều ý tưởng thiết kế hay nhưng chưa được kiểm chứng bằng thí nghiệm cá nhân hoặc prototype.
* Mối liên hệ giữa ghi nhớ, hiểu sâu, chuyển giao, và sáng tạo còn cần được tổng hợp chặt hơn.

## Các khái niệm phát triển tốt

| Khái niệm | Nhận xét |
| --------- | -------- |
| [[Hệ thống ghi nhớ lặp lại ngắt quãng]] | Hub mạnh nhất. Có nhiều ghi chú về hiệu ứng kiểm tra, hiệu ứng ngắt quãng, rào cản áp dụng, viết thẻ, cảm xúc, ứng dụng ngoài học thuộc. |
| [[Công cụ ghi nhớ]] | Phát triển tốt. Có định nghĩa, lịch sử qua [[Quantum Country]], thiết kế câu nhắc, tác động lên trí nhớ, giới hạn áp dụng, hướng mở rộng. |
| Câu hỏi ứng dụng trong phương tiện ghi nhớ | Cụm này giàu hơn mức định nghĩa. Vault phân biệt câu hỏi nhớ lại, câu hỏi ứng dụng, câu hỏi thay đổi theo lần lặp, câu trả lời không rút từ trí nhớ. |
| [[Ghi chú thường xanh]] | Rất trưởng thành. Có nguyên tắc, ví dụ, liên hệ với Luhmann, Ahrens, viết, đọc, liên kết dày đặc, ghi chú nguyên tử. |
| [[Công việc tri thức nên tích lũy]] | Trục mạnh. Nó nối ghi chú, SRS, viết, đọc, inbox, và lãi kép tri thức. |
| [[Môi trường khai phóng]] | Phát triển tốt. Có định nghĩa, ví dụ YC, phần mềm, game, trường học, thiết kế, mục đích nội tại, người dùng chuyên gia. |
| [[Trải nghiệm thể hiện]] | Khái niệm mạnh, nhiều ví dụ và phản ví dụ. Đặc biệt tốt ở việc phân biệt sách, phim, game, phần mềm, YC. |
| Cuốn Primer và game giáo dục | Có nhiều nhánh phê bình. Điểm tốt là không dừng ở mức “Primer hay”, mà phân tích vì sao nó khả thi hoặc không khả thi. |
| Luyện tập có chủ đích và chuyên môn | Có nền Ericsson, Pool, Miller, chunking, biểu diễn tinh thần. Đủ tốt để làm nền cho công việc tri thức. |
| Lập trình sự chú ý | Ý tưởng rất mạnh vì nó nối SRS, văn bản có chiều thời gian, Readwise, Kawara, inbox, thói quen. |

## Các khái niệm còn yếu

| Khái niệm | Thiếu gì |
| --------- | -------- |
| [[Công cụ tư duy]] | Hub này quá mỏng so với vai trò của nó. Cần một ghi chú trung tâm hoặc MOC nối UI, phương tiện ghi nhớ, môi trường khai phóng, tài trợ, prototype, lịch sử. |
| [[Quantum Country]] | Được backlink nhiều nhưng nội dung ghi chú rất ngắn. Cần phân tích vì sao nó quan trọng, thiết kế nào thành công, thiết kế nào chưa. |
| [[Đọc gia tăng]] | Có nhiều liên hệ tiềm năng với SRS, inbox, đọc tổng hợp, nhưng ghi chú hiện còn quá ngắn. |
| [[Đọc khảo sát]] | Gần như chỉ có nguồn. Cần ví dụ thực hành và cách dùng trong workflow đọc. |
| [[Học chuyển giao]] | Then chốt nếu muốn nối ghi nhớ với hiểu sâu và ứng dụng, nhưng còn yếu. |
| [[Công nghệ giáo dục]] | Nhiều ghi chú liên quan, nhưng khái niệm trung tâm còn rất mỏng. |
| [[Trò chơi giáo dục]] | Có các ghi chú phê bình tốt, nhưng cần tổng hợp thành lý thuyết rõ hơn. |
| [[Sách thực thi]] | Ý tưởng hứa hẹn nhưng còn dạng TODO. Cần định nghĩa, ví dụ, cơ chế, phản ví dụ. |
| [[Văn bản có chiều thời gian]] | Ý tưởng mạnh nhưng chưa đủ mô hình thiết kế. Cần phân loại các cơ chế mở ra theo thời gian. |
| [[Các tác nhân truy xuất thông tin đúng lúc]] | Có nguồn và ví dụ, nhưng chưa nối đủ với Obsidian, AI, tầm nhìn ngoại vi, đọc, viết. |
| Siêu lý tính | Có ghi chú sách dài, nhưng chưa được tiêu hóa thành các ghi chú thường xanh nhỏ và liên kết với công việc tri thức, ra quyết định, nghiên cứu. |
| Trải nghiệm cá nhân của Mun | Đây là khoảng yếu nhất nếu mục tiêu là bộ não thứ hai cá nhân. Cần nhiều ghi chú “tôi đã thử, tôi thấy gì, tôi đổi gì”. |

## Khoảng trống tri thức quan trọng

| Lĩnh vực | Vì sao quan trọng |
| -------- | ----------------- |
| MOC Công cụ tư duy | Vault xoay quanh công cụ tư duy nhưng hub chính chưa đủ mạnh. Không có MOC này, các mảng UI, SRS, ghi chú, môi trường khai phóng, tài trợ bị phân mảnh. |
| MOC Đọc và tiêu hóa tài liệu | Có nhiều ghi chú về đọc nhưng chưa có bản đồ trung tâm. Đây là cầu nối giữa đầu vào tri thức và ghi chú thường xanh. |
| Khung đánh giá phương tiện ghi nhớ | Vault có nhiều tuyên bố về tác động của mnemonic medium, nhưng thiếu khung đo: nhớ, hiểu, chuyển giao, cảm xúc, duy trì thói quen. |
| Lý thuyết chuyển giao | Nếu SRS chỉ giúp nhớ mà không chuyển thành hành động hoặc hiểu sâu, giá trị bị giới hạn. |
| Động lực và cảm xúc trong học tập | Vault nhiều lần nói kết nối cảm xúc là then chốt, nhưng nền lý thuyết về motivation, self determination, affect, identity còn mỏng. |
| Mâu thuẫn giữa luyện tập có chủ đích và môi trường khai phóng | Một ghi chú đã chỉ ra mâu thuẫn này. Đây là vấn đề lý thuyết lớn, đáng giải. |
| Prototype và thí nghiệm cá nhân | Nhiều ý tưởng thiết kế chưa có vòng kiểm chứng. Thiếu log thí nghiệm sẽ khiến vault giàu lý thuyết nhưng khó sinh insight riêng. |
| Kinh tế học công cụ tư duy | Có hàng hóa công, tài trợ bậc hai, Ostrom, nhưng chưa có mô hình hoàn chỉnh về vì sao lĩnh vực này khó được tài trợ và phát triển. |
| AI và tác nhân truy xuất đúng lúc | Đây là hướng tự nhiên cho vault hiện tại, nhất là với Obsidian. Nhưng hiện mới có một ghi chú nhỏ từ literature cũ. |
| Bối cảnh Việt Nam và công việc thật của Mun | Vault dịch rất tốt, nhưng cần lớp ứng dụng vào công việc tri thức hằng ngày, TPM, đọc tài liệu kỹ thuật, quản lý dự án, học tiếng Anh, viết. |

## Mức độ trưởng thành theo lĩnh vực

| Lĩnh vực | Mức độ | Nhận xét |
| -------- | ------ | -------- |
| SRS và hệ thống ghi nhớ | Rất trưởng thành | Nhiều ghi chú, nhiều liên kết, có nghiên cứu, có câu hỏi thiết kế. |
| Công cụ ghi nhớ | Rất trưởng thành | Một trong các lõi mạnh nhất của vault. |
| Ghi chú thường xanh và hệ thống viết | Rất trưởng thành | Có MOC, nguyên tắc, workflow, liên hệ với đọc và viết. |
| Công việc tri thức tích lũy | Trưởng thành | Khung tư duy rõ, liên kết tốt với SRS và ghi chú. |
| Môi trường khai phóng và trải nghiệm thể hiện | Trưởng thành | Rất giàu ý tưởng, nhưng còn thiếu prototype và kiểm chứng thực tế. |
| Primer, game, giáo dục | Đang phát triển | Chất liệu nhiều nhưng còn phân mảnh. |
| Luyện tập, chuyên môn, nhận thức | Đang phát triển | Có nền nghiên cứu tốt, cần nối mạnh hơn với công việc tri thức. |
| Đọc và đọc kỹ thuật số | Đang phát triển | Nhiều ghi chú tốt, thiếu MOC và workflow cá nhân rõ. |
| UI, phần mềm, tầm nhìn ngoại vi | Đang phát triển | Có insight hay nhưng cần tổng hợp thành khung thiết kế. |
| Công cụ tư duy và tài trợ | Sơ khai đến đang phát triển | Ý tưởng quan trọng nhưng hub chính quá mỏng. |
| Văn bản có chiều thời gian | Đang phát triển | Ý tưởng mạnh, thiếu taxonomy và ví dụ triển khai. |
| AI, tác nhân truy xuất đúng lúc | Sơ khai | Hứa hẹn lớn, hiện gần như mới là mầm. |
| Siêu lý tính | Sơ khai đến đang phát triển | Có nguồn dài, nhưng chưa được atomize và tích hợp. |
| Lớp trải nghiệm cá nhân của Mun | Sơ khai | Đây là hướng nâng cấp quan trọng nhất. |

## 5 chủ đề ROI cao nhất trong 20 giờ

Giả định: chỉ có 20 giờ nghiên cứu trong 3 tháng tới. Mục tiêu không phải mở thêm thật nhiều vùng mới, mà là tăng khả năng sinh insight của toàn vault.

### 1. MOC Công cụ tư duy, 4 giờ

**Vì sao ROI cao nhất:** Vault hiện xoay quanh công cụ tư duy, nhưng [[Công cụ tư duy]] còn rất mỏng. Chủ đề này sẽ nối nhiều cụm lớn đã có sẵn: [[Công cụ ghi nhớ]], [[Ghi chú thường xanh]], [[Môi trường khai phóng]], [[Trải nghiệm thể hiện]], [[Tầm nhìn ngoại vi]], [[Các tác nhân truy xuất thông tin đúng lúc]], [[Các ý tưởng giao diện người dùng mới lạ là hàng hóa công]].

**Kết quả nên tạo:** Một MOC có 5 đến 7 nhánh:

* Công cụ tư duy là gì?
* Công cụ tư duy khác công cụ năng suất thế nào?
* Vì sao công cụ tư duy khó thiết kế?
* Các ví dụ tốt: mnemonic medium, Obsidian, Quantum Country, Execute Program.
* Các nguyên tắc thiết kế.
* Các rào cản: tài trợ, UI, bối cảnh sử dụng thật.
* Hướng nghiên cứu tiếp.

**Lợi ích:** Chỉ 4 giờ có thể làm rõ xương sống của toàn vault. Đây là khoản đầu tư cấu trúc, không chỉ thêm nội dung.

### 2. MOC Đọc để tích lũy hiểu biết, 4 giờ

**Vì sao ROI cao:** Đọc là đầu vào chính của vault. Nếu quy trình đọc yếu, vault sẽ tiếp tục phình ra nhưng không tạo nhiều insight riêng.

**Kết nối với:** [[Viết về thứ mình đọc]], [[Đọc tổng hợp]], [[Đọc gia tăng]], [[Đọc khảo sát]], [[Hộp thư đọc để thu thập tài liệu tham khảo có thể hữu ích]], [[Cách xử lý chú thích đọc thành ghi chú thường xanh]], [[Đọc văn bản trên máy tính là không dễ chịu]].

**Kết quả nên tạo:** Một MOC trả lời câu hỏi: “Làm sao đọc để tri thức thật sự tích lũy?”

Workflow tối thiểu:

1. Thu thập.
2. Sàng lọc.
3. Đọc khảo sát.
4. Đọc sâu.
5. Tạo ghi chú thường xanh.
6. Tổng hợp thành bài hoặc MOC.

**Lợi ích:** Chủ đề này cải thiện toàn bộ hệ thống nạp tri thức. Nó cũng thực tế cho công việc TPM, đọc tài liệu kỹ thuật, đọc sách, học tiếng Anh.

### 3. Từ bản dịch sang hiểu biết cá nhân, 3 giờ

**Vì sao ROI rất cao:** Đây là điểm chuyển hóa quan trọng nhất của vault. Hiện vault giàu nhưng vẫn phụ thuộc nhiều vào Andy Matuschak. Muốn biến nó thành bộ não thứ hai của Mun, cần một lớp ghi chú cá nhân.

**Kết nối với:** [[Tự mình suy nghĩ]], [[Viết về thứ mình đọc]], [[Dùng ghi chú để tránh kết luận định sẵn]], [[Ghi chú nên làm bạn ngạc nhiên]], [[Ghi chú thường xanh là nơi an toàn để nuôi ý tưởng táo bạo]].

**Kết quả nên tạo:** Một note trung tâm tên “Cách tôi biến ghi chú dịch thành hiểu biết cá nhân”.

Bốn loại bổ sung cá nhân nên dùng:

* Ví dụ từ công việc của mình.
* Phản biện hoặc nghi ngờ.
* Câu hỏi chưa hiểu.
* Ứng dụng thử trong đời thật.

**Lợi ích:** Chủ đề nhỏ nhưng đòn bẩy lớn. Nó giúp toàn bộ vault chuyển từ “dịch tốt” sang “suy nghĩ bằng chính mình”.

### 4. Khung đánh giá phương tiện ghi nhớ, 5 giờ

**Vì sao ROI cao:** [[Công cụ ghi nhớ]] và [[Hệ thống ghi nhớ lặp lại ngắt quãng]] là hai cụm mạnh nhất vault. Nhưng để phát triển tiếp, cần khung đánh giá rõ hơn: phương tiện ghi nhớ thành công khi nào?

Không nên chỉ hỏi: “Người đọc có nhớ không?” Nên hỏi thêm:

* Họ có hiểu sâu hơn không?
* Họ có ứng dụng được không?
* Họ có quay lại văn bản không?
* Họ có duy trì kết nối cảm xúc không?
* Họ có tạo liên kết mới không?
* Họ có thay đổi hành vi học tập không?

**Kết nối với:** [[Công cụ ghi nhớ]], [[Phương tiện ghi nhớ tác động thế nào lên trí nhớ người đọc]], [[Công cụ ghi nhớ có thể giúp người đọc vận dụng điều đã học bằng các câu hỏi đơn giản]], [[Điều quan trọng nhất cần tối ưu hóa trong hệ thống ghi nhớ lặp lại ngắt quãng là kết nối cảm xúc với phiên ôn tập và nội dung của nó]], [[Học chuyển giao]].

**Kết quả nên tạo:** Một note tên “Khung đánh giá phương tiện ghi nhớ”, gồm 5 tầng đánh giá:

1. Ghi nhớ.
2. Hiểu khái niệm.
3. Ứng dụng.
4. Chuyển giao.
5. Duy trì quan hệ cảm xúc với nội dung.

**Lợi ích:** Đây là cách biến cụm mạnh nhất trong vault thành một chương trình nghiên cứu thật sự.

### 5. Trải nghiệm 30 ngày với phương tiện ghi nhớ cá nhân, 4 giờ

**Vì sao ROI cao:** Vault cần bằng chứng cá nhân. Chủ đề này cho dữ liệu thật với công sức thấp.

Không cần làm dự án lớn. Chỉ cần chọn 10 đến 20 ghi chú quan trọng, tạo vài câu nhắc, ôn trong 30 ngày, rồi ghi lại kết quả.

**Kết nối với:** [[Cách tôi triển khai phương tiện ghi nhớ cá nhân]], [[Dùng lặp lại ngắt quãng để lập trình sự chú ý]], [[Ghi chú thường xanh]], [[Duy trì ghi chú thường xanh tương tự lặp lại ngắt quãng]], [[Phương tiện ghi nhớ có thể được mở rộng sang ghi chú cá nhân]].

**Kết quả nên tạo:** Một lab log tên “Thí nghiệm 30 ngày với phương tiện ghi nhớ cá nhân”.

Log nên ghi:

* Chọn ghi chú nào.
* Tạo câu nhắc nào.
* Câu nhắc nào hữu ích.
* Câu nhắc nào gây chán.
* Có nhớ tốt hơn không.
* Có tạo insight mới không.
* Có muốn tiếp tục không.

**Lợi ích:** Đây là cách nhanh nhất để thêm dữ liệu sống vào vault. Nó cũng giúp hiểu SRS bằng trải nghiệm, không chỉ bằng lý thuyết.

## Kế hoạch 20 giờ trong 3 tháng

### Tháng 1, 7 giờ

* 4 giờ: tạo MOC Công cụ tư duy.
* 3 giờ: bắt đầu MOC Đọc để tích lũy hiểu biết.

Mục tiêu tháng 1: làm rõ bản đồ.

### Tháng 2, 7 giờ

* 1 giờ: hoàn tất MOC Đọc để tích lũy hiểu biết.
* 3 giờ: viết note “Từ bản dịch sang hiểu biết cá nhân”.
* 3 giờ: thiết kế và bắt đầu thí nghiệm 30 ngày với phương tiện ghi nhớ cá nhân.

Mục tiêu tháng 2: thêm lớp cá nhân và bắt đầu kiểm chứng.

### Tháng 3, 6 giờ

* 5 giờ: viết “Khung đánh giá phương tiện ghi nhớ”.
* 1 giờ: tổng kết thí nghiệm 30 ngày.

Mục tiêu tháng 3: tổng hợp lý thuyết với trải nghiệm.

## Vì sao không chọn các chủ đề khác lúc này

* Không chọn kinh tế học công cụ tư duy vì thú vị nhưng xa nhu cầu trực tiếp của vault. ROI thấp hơn trong 20 giờ.
* Không chọn AI và tác nhân truy xuất đúng lúc vì dễ kéo sang triển khai kỹ thuật. Rất đáng làm sau, nhưng chưa phải ưu tiên nếu chỉ có 20 giờ.
* Không chọn siêu lý tính vì nguồn lớn, dễ thành hố sâu nghiên cứu. Nên quay lại khi có nhiều thời gian hơn.
* Không chọn mâu thuẫn giữa luyện tập có chủ đích và môi trường khai phóng, dù rất hay, vì đây là bài toán lý thuyết khó. Nên để sau khi đã có MOC Công cụ tư duy và khung đánh giá phương tiện ghi nhớ.

## 10 ghi chú hoặc chủ đề nên tạo tiếp theo

1. **MOC Công cụ tư duy**
   * Quan trọng vì nó vá hub yếu nhất so với vai trò trong vault.
   * Kết nối với [[Công cụ ghi nhớ]], [[Ghi chú thường xanh]], [[Môi trường khai phóng]], [[Các ý tưởng giao diện người dùng mới lạ là hàng hóa công]].
   * Mở rộng vault từ các cụm rời thành một bản đồ nghiên cứu.

2. **MOC Đọc để tích lũy hiểu biết**
   * Quan trọng vì đọc là đầu vào chính của vault.
   * Kết nối với [[Viết về thứ mình đọc]], [[Đọc tổng hợp]], [[Đọc gia tăng]], [[Hộp thư đọc để thu thập tài liệu tham khảo có thể hữu ích]].
   * Mở rộng workflow đọc -> chú thích -> ghi chú thường xanh -> bài viết.

3. **Khung đánh giá phương tiện ghi nhớ**
   * Quan trọng vì cụm mnemonic medium cần tiêu chí kiểm chứng.
   * Kết nối với [[Công cụ ghi nhớ]], [[Hệ thống ghi nhớ lặp lại ngắt quãng]], [[Học chuyển giao]].
   * Mở rộng từ thiết kế khái niệm sang nghiên cứu thực nghiệm.

4. **Từ ghi nhớ đến chuyển giao**
   * Quan trọng vì nhớ tốt hơn chưa chắc làm tốt hơn.
   * Kết nối với [[Học chuyển giao]], [[Dùng hệ thống ghi nhớ lặp lại ngắt quãng để hiểu khái niệm sâu hơn]], [[Công việc tri thức hiếm khi bao gồm luyện tập có chủ đích]].
   * Mở rộng SRS từ trí nhớ sang năng lực thật.

5. **Mâu thuẫn giữa luyện tập có chủ đích và môi trường khai phóng**
   * Quan trọng vì vault đã tự phát hiện mâu thuẫn này.
   * Kết nối với [[Môi trường khai phóng]], [[Luyện tập có mục đích, theo Ericsson và Pool]], [[Công việc tri thức hiếm khi bao gồm luyện tập có chủ đích]].
   * Mở rộng lý thuyết học tập giữa luyện bài và tham gia việc thật.

6. **Trải nghiệm 30 ngày với phương tiện ghi nhớ cá nhân**
   * Quan trọng vì vault cần dữ liệu cá nhân.
   * Kết nối với [[Cách tôi triển khai phương tiện ghi nhớ cá nhân]], [[Dùng lặp lại ngắt quãng để lập trình sự chú ý]], [[Ghi chú thường xanh]].
   * Mở rộng vault thành phòng thí nghiệm cá nhân.

7. **Thiết kế văn bản có chiều thời gian**
   * Quan trọng vì đây là ý tưởng mạnh nhưng chưa đủ cấu trúc.
   * Kết nối với [[Văn bản có chiều thời gian]], [[Phương tiện ghi nhớ có thể được thiết kế để mở ra trải nghiệm theo thời gian]], [[Execute Program]], [[Readwise]], [[Kawara]].
   * Mở rộng bằng taxonomy cho các loại văn bản mở ra theo ngày, tuần, hành động, mức nhớ.

8. **Kinh tế học công cụ tư duy**
   * Quan trọng vì công cụ tư duy có thể là hàng hóa công.
   * Kết nối với [[Công cụ tư duy]], [[Các ý tưởng giao diện người dùng mới lạ là hàng hóa công]], [[Tài trợ bậc hai có thể cung cấp công cụ tư duy đến mức độ nào_]], [[Elinor Ostrom]], [[Hàng hóa công]].
   * Mở rộng từ thiết kế sản phẩm sang thiết kế hệ sinh thái nghiên cứu.

9. **Tác nhân truy xuất thông tin đúng lúc cho Obsidian**
   * Quan trọng vì đây là ứng dụng thực tế của vault trong thời AI.
   * Kết nối với [[Các tác nhân truy xuất thông tin đúng lúc]], [[Tầm nhìn ngoại vi]], [[Liên kết ngược theo ngữ cảnh]], [[Ghi chú thường xanh nên liên kết dày đặc]].
   * Mở rộng từ graph tĩnh sang môi trường tư duy chủ động gợi ý.

10. **Từ bản dịch sang hiểu biết cá nhân**
    * Quan trọng vì đây là bước trưởng thành tiếp theo của vault.
    * Kết nối với [[Tự mình suy nghĩ]], [[Viết về thứ mình đọc]], [[Dùng ghi chú để tránh kết luận định sẵn]], [[Ghi chú nên làm bạn ngạc nhiên]].
    * Mở rộng vault từ thư viện dịch sang bộ não thứ hai cá nhân.

## Kết luận

Nếu chỉ có 20 giờ, không nên cố mở thêm nhiều vùng mới. Nên làm ba việc:

* Tạo bản đồ cho các cụm đang phân mảnh.
* Thêm lớp hiểu biết cá nhân.
* Kiểm chứng một ý tưởng mạnh bằng trải nghiệm nhỏ.

5 chủ đề ROI cao nhất ở trên làm đúng ba việc đó.
