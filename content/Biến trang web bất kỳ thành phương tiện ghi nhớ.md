---
aliases:
  - Turning any web page into the mnemonic medium
created: 2026-05-26
modified: 2026-05-26
---

[[Quantum Country]] là trang web xây riêng; cơ chế ghi nhớ ăn sâu vào cách trình bày bài luận. Nhưng các tương tác cốt lõi của [[Phương tiện ghi nhớ]] đủ tách bạch để có thể nhúng vào trang web bất kỳ chỉ bằng HTML đơn giản.

Đây là một mảnh ghép cốt lõi trong tầm nhìn của tôi về một [[Hệ thống ghi nhớ lặp lại ngắt quãng cấp hệ điều hành]].

#### Web Components
Ta có thể định nghĩa đặc tả cho câu hỏi ghi nhớ qua các thẻ HTML mới (ví dụ `<card>`). Sau đó cung cấp một thư viện Javascript (có thể mã nguồn mở), khi được thêm vào trang sẽ "kích hoạt" các thành phần này bằng cách thay chúng bằng DOM node lúc chạy. Các [web component](https://www.webcomponents.org/) kiểu này hiện được hỗ trợ tốt trên mọi trình duyệt hiện đại, trừ Edge, và hình như đã có polyfill cho Edge.

Cách này không buộc nhà xuất bản phải gắn với một máy chủ cụ thể để lưu trạng thái người dùng. Thư viện phía client có thể hỗ trợ nhiều endpoint máy chủ khi chúng xuất hiện, kể cả lưu trữ bền vững do chính client quản lý (khỏi cần tài khoản).

Hướng này linh hoạt: bạn có thể hoán đổi thư viện client của chúng tôi sang thư viện khác hỗ trợ cùng đặc tả web component; nó mở rộng sang các backend khác trong tương lai; phạm vi thư viện JS có thể mở rộng sang tính năng khác. Nhà xuất bản tự host JS hoặc dùng từ CDN do chúng tôi vận hành đều được. Nếu JS bị tắt hoặc script không tải được, các thẻ chỉ đơn giản là không hiện. Bạn thậm chí có thể định nghĩa kiểu in cho các thẻ này.

Tuy vậy, hướng này kéo theo khá nhiều tầng trừu tượng. Nếu cần đổi giao thức, đặc tả, hoặc định dạng trạng thái theo cách đáng kể, ta sẽ vướng vấn đề tương thích.

Quan trọng hơn, hướng này yêu cầu tác giả/nhà xuất bản tạo được HTML có ý nghĩa. Điều này có thể khó tích hợp vào quy trình xuất HTML từ tài liệu nguồn InDesign. Nếu tài liệu HTML không phải "nguồn sự thật", các thẻ card sẽ bị ghi đè mỗi lần tác giả xuất lại từ tài liệu gốc.

Có lẽ ta vẫn nên làm plugin cho các nền tảng như Wordpress theo hướng này.

#### Rào cản đáng kể cho việc xác thực người dùng trong bối cảnh bên thứ ba

Sau khi đăng nhập, người dùng nên tích lũy câu hỏi được trên các trang web khác nhau mà không phải đăng nhập lại trên từng trang. Khó làm được điều này.

Trang web host không thể ghi cookie để trang host tiềm năng khác đọc được: cookie bị khóa theo origin.

Ta có thể nhúng cơ chế xác thực trong iframe, host trên một origin nhất quán, nhưng đây sẽ là "cookie bên thứ ba". Vài năm gần đây, các trình duyệt (đặc biệt là Safari) siết chặt cookie bên thứ ba, vì chúng thường bị dùng để theo dõi và quảng cáo xâm phạm quyền riêng tư.

Nói chung, bất kỳ cơ chế nào cho phép câu hỏi nhúng chia sẻ thông tin xác thực cũng cho phép theo dõi người dùng vào mục đích xâm phạm quyền riêng tư. Vì vậy về cơ bản chúng tôi mắc kẹt vĩnh viễn với các tính năng bảo mật này. Chrome và Edge sẽ "chạy bình thường", ít nhất trong vài năm tới, nhưng Safari và Firefox thì không. Edge được đánh dấu là "đang triển khai" Storage Access API.

Apple và Mozilla đã tạo Storage Access API cho phép nội dung bên thứ ba xin quyền truy cập vào thông tin xác thực lưu trong context này. Trong Safari, dường như API này *luôn luôn* bắt phải hiện prompt phê duyệt. Phiền. Tệ hơn: Safari có thể *vẫn* chỉ cho phép đặt cookie trong context này nếu người dùng đã tương tác với trang trong context bên thứ nhất. Tàn nhẫn. Có lẽ cần làm extension Safari để trải nghiệm trên Safari trở nên hợp lý.

#### Phân tích và thay thế khối văn bản
Một số quy trình không cho phép tác giả thêm thẻ HTML tùy ý. Ví dụ, họ tạo trang qua phần mềm blog tùy chỉnh chỉ có WYSIWYG.

Trong các trường hợp này, giả sử việc chèn script vẫn khả thi, ta có thể cho phép tác giả thêm câu hỏi theo kiểu giống [[Cách tôi triển khai phương tiện ghi nhớ cá nhân]], dưới dạng văn bản thuần, script sẽ phân tích và trích xuất lúc chạy.