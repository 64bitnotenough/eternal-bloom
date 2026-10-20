# Biên bản kiểm tra bàn giao

## Đã thực hiện

- Cài dependencies bằng npm; package-lock.json đi kèm để workflow dùng npm ci.
- Kiểm tra TypeScript nghiêm ngặt và build Vite production: đạt.
- Kiểm tra CPU qua `node scripts/check-geometry.mjs`: 5 loại cánh khác nhau, mỗi geometry 330 đỉnh / 656 tam giác; position, normal, color đều hữu hạn; index trong phạm vi hợp lệ; có kích thước theo cả 3 chiều.
- Kiểm tra cấu hình: 18 lời nhắn, 6 màu HEX hợp lệ.
- Kiểm tra HTML production: tài nguyên dùng tiền tố `/eternal-bloom/assets/`.
- Khởi động máy chủ Vite và mở bằng trình duyệt kiểm thử: tải giao diện React và cấu hình được.
- Quan sát console: renderer không tạo được WebGL context vì GPU của trình duyệt kiểm thử bị vô hiệu hóa (`GL_VENDOR = Disabled`, `GL_RENDERER = Disabled`).
- Xác nhận giao diện chuyển sang thông báo thân thiện, không để trang trắng khi WebGL không khả dụng.
- Đối chiếu workflow với hướng dẫn GitHub Pages/Vite chính thức: hai job build/deploy, quyền pages/id-token, môi trường github-pages, upload dist, dùng base tương ứng tên repository.

## Chưa thể xác minh tại môi trường này

- Hình ảnh render thực của bó hoa, ánh sáng, vật liệu, shader và độ hài hòa bố cục.
- Hoạt ảnh nở, thao tác raycast chọn hoa, xoay/zoom và chòm sao trên GPU.
- Cử chỉ cảm ứng trên Android/iPhone, bố cục trên màn hình điện thoại thật.
- Âm thanh và tốc độ khung hình trên thiết bị người nhận.
- Chạy workflow trên tài khoản GitHub và truy cập đường link Pages công khai.

Không có ảnh chụp bó hoa vì WebGL không hoạt động trong trình duyệt kiểm thử. Không dùng hình tạo sinh hoặc render 2D để thay ảnh chụp thực tế. Việc build và kiểm tra hình học thành công không đủ để xác nhận các mục hình ảnh/tương tác đã đạt.

## Kiểm tra nhanh trước khi gửi quà

1. `npm install`, `npm run dev`; mở URL do Vite cung cấp.
2. Mở quà; xác nhận bó hoa xuất hiện và có cánh cong thật khi xoay.
3. Chạm hoa hồng, mẫu đơn, tulip, cosmos, Aurora; xem lời nhắn và vòng hạt.
4. Chạm 5 bông khác nhau; xác nhận chòm sao và lá thư.
5. Thử “Nở lần nữa”, góc nhìn, bật/tắt nhạc; Tab đến nút khám phá hoa và Esc đóng thư.
6. Mở trên điện thoại; vuốt, chụm hai ngón và kiểm tra chữ/nút không che hoa.
7. `npm run build`, `npm run preview`; kiểm tra tương tự trên bản production.
8. Push lên GitHub, bật Pages → GitHub Actions; chờ job deploy xanh và kiểm tra lại URL Pages.

## Cập nhật theo ảnh mẫu hoa thủy tinh

- Đã thay hình học mép cánh, độ dày, sắc hồng đào/ngọc trai; ba bông chính nổi bật, nhụy sáng vàng, lá kính xanh, thân đồng và nền xanh đêm.
- Đã thêm môi trường phản xạ studio procedural bằng RoomEnvironment + PMREM, transmission và IOR; môi trường phản chiếu được giải phóng cùng scene.
- Đã chạy lại TypeScript, production build và kiểm tra CPU cho đủ 5 loại cánh: đạt.
- Chưa xác minh kết quả hình ảnh vật liệu thủy tinh hoặc độ giống ảnh mẫu trên GPU. Giới hạn WebGL nêu trên vẫn áp dụng.
