---
aliases:
  - Turning any web page into the mnemonic medium
created: 2026-05-26
modified: 2026-06-10
---

[[Quantum Country]] là một trang web được xây riêng, nơi cơ chế ghi nhớ ăn sâu vào cách trình bày bài luận. Nhưng các tương tác cốt lõi của [[Công cụ ghi nhớ|phương tiện ghi nhớ]] đủ tách biệt để có thể nhúng vào bất kỳ trang web nào chỉ bằng HTML đơn giản.

Đây là một mảnh ghép cốt lõi trong tầm nhìn của tôi về một [[Hệ thống ghi nhớ lặp lại ngắt quãng cấp hệ điều hành]].

#### Web Components
Ta có thể định nghĩa đặc tả cho câu hỏi ghi nhớ bằng các thẻ HTML mới, ví dụ `<card>`. Sau đó, ta cung cấp một thư viện Javascript, có thể là mã nguồn mở. Khi được thêm vào trang, thư viện này sẽ "kích hoạt" các thành phần đó bằng cách thay chúng bằng DOM node lúc chạy. Các [web component](https://www.webcomponents.org/) kiểu này hiện được hỗ trợ tốt trên mọi trình duyệt hiện đại, trừ Edge, và hình như đã có polyfill cho Edge.

Cách này không buộc nhà xuất bản phải gắn với một máy chủ cụ thể để lưu trạng thái người dùng. Thư viện phía client có thể hỗ trợ nhiều endpoint máy chủ khi chúng xuất hiện, kể cả lưu trữ bền vững do chính client quản lý, không cần tài khoản.

Hướng này khá linh hoạt: bạn có thể thay thư viện client của chúng tôi bằng thư viện khác hỗ trợ cùng đặc tả web component; nó có thể mở rộng sang các backend khác trong tương lai; và phạm vi của thư viện JS cũng có thể mở rộng sang các tính năng khác. Nhà xuất bản có thể tự host JS hoặc dùng CDN do chúng tôi vận hành. Nếu JS bị tắt hoặc script không tải được, các thẻ chỉ đơn giản là không hiện. Bạn thậm chí có thể định nghĩa kiểu in cho các thẻ này.

Tuy vậy, hướng này kéo theo khá nhiều tầng trừu tượng. Nếu cần đổi giao thức, đặc tả hoặc định dạng trạng thái theo cách đáng kể, ta sẽ gặp vấn đề tương thích.

Quan trọng hơn, hướng này yêu cầu tác giả hoặc nhà xuất bản tạo được HTML có ý nghĩa. Điều này có thể khó tích hợp vào quy trình xuất HTML từ tài liệu nguồn InDesign. Nếu HTML không phải "nguồn sự thật", các thẻ card sẽ bị ghi đè mỗi lần tác giả xuất lại từ tài liệu gốc.

Có lẽ ta vẫn nên làm plugin cho các nền tảng như Wordpress theo hướng này.

#### Rào cản đáng kể cho việc xác thực người dùng trong bối cảnh bên thứ ba

Sau khi đăng nhập, người dùng nên có thể tích lũy câu hỏi từ nhiều trang web khác nhau mà không phải đăng nhập lại trên từng trang. Điều này khó làm.

Trang web host không thể ghi cookie để một trang host tiềm năng khác đọc được, vì cookie bị khóa theo origin.

Ta có thể nhúng cơ chế xác thực trong iframe, được host trên một origin nhất quán, nhưng đó sẽ là "cookie bên thứ ba". Vài năm gần đây, các trình duyệt, đặc biệt là Safari, đã siết chặt cookie bên thứ ba vì chúng thường bị dùng để theo dõi và quảng cáo xâm phạm quyền riêng tư.

Nói chung, bất kỳ cơ chế nào cho phép câu hỏi nhúng chia sẻ thông tin xác thực cũng có thể bị dùng để theo dõi người dùng theo cách xâm phạm quyền riêng tư. Vì vậy, về cơ bản chúng tôi sẽ còn mắc kẹt lâu dài với các tính năng bảo mật này. Chrome và Edge sẽ "chạy bình thường", ít nhất trong vài năm tới, nhưng Safari và Firefox thì không. Edge được đánh dấu là "đang triển khai" Storage Access API.

Apple và Mozilla đã tạo Storage Access API, cho phép nội dung bên thứ ba xin quyền truy cập vào thông tin xác thực lưu trong ngữ cảnh này. Trong Safari, dường như API này *luôn* buộc phải hiện prompt phê duyệt. Phiền. Tệ hơn, Safari có thể *vẫn* chỉ cho phép đặt cookie trong ngữ cảnh này nếu người dùng đã tương tác với trang trong ngữ cảnh bên thứ nhất. Khá khắc nghiệt. Có lẽ cần làm extension Safari để trải nghiệm trên Safari trở nên hợp lý.

#### Phân tích và thay thế khối văn bản
Một số quy trình không cho phép tác giả thêm thẻ HTML tùy ý. Ví dụ, họ tạo trang qua phần mềm blog tùy chỉnh chỉ có WYSIWYG.

Trong các trường hợp này, giả sử vẫn có thể chèn script, ta có thể cho phép tác giả thêm câu hỏi dưới dạng văn bản thuần, giống cách trong [[Cách tôi triển khai phương tiện ghi nhớ cá nhân]]. Script sẽ phân tích và trích xuất các câu hỏi đó lúc chạy.