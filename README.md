# ETERNAL BLOOM — A Universe Made for You

Một bó hoa 3D tương tác để tặng người thương. React + TypeScript + Vite + Three.js, chạy hoàn toàn ở trình duyệt. Không tài khoản, backend, API key hoặc tài nguyên 3D trả phí.

## 1. Chạy trên Windows

1. Cài **Node.js 22 LTS** (tối thiểu 22.12), mở lại Terminal sau khi cài.
2. Giải nén ZIP. Mở thư mục `eternal-bloom` — nơi có `package.json`.
3. Bấm thanh địa chỉ của File Explorer, gõ `cmd` rồi Enter.
4. Chạy lần lượt:

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in trong Terminal, thường là `http://localhost:5173/eternal-bloom/`. Giữ Terminal mở. Dừng bằng Ctrl+C.

**Không bấm đúp `index.html`.** Trình duyệt cần máy chủ HTTP để tải module và cấu hình.

Kiểm tra bản phát hành:

```bash
npm run build
npm run preview
```

Mở địa chỉ in ra, kèm `/eternal-bloom/`. `dist/` là website đã build; `node_modules/` không cần tải lên GitHub.

## 2. Cá nhân hóa

Chỉ cần sửa `public/gift-config.json` bằng VS Code hoặc Notepad. Giữ đúng cú pháp JSON (dấu ngoặc kép, dấu phẩy giữa mục, không ghi chú trong JSON).

| Trường | Ý nghĩa |
| --- | --- |
| `recipient` | Tên người nhận; để `""` để dùng “em” |
| `sender` | Tên người tặng hoặc cách xưng hô |
| `headline` | Câu bên cạnh bó hoa |
| `letter` | Nội dung lá thư; xuống dòng bằng `\n` |
| `messages` | Danh sách lời nhắn khi chạm hoa, ít nhất 1 câu |
| `palette` | Các mã màu HEX; ít nhất 1 màu, mặc định 6 màu |
| `womenDay` | `true` để có lời chúc 20/10 trong thư, `false` để ẩn |
| `womenDayMessage` | Lời chúc 20/10 |
| `musicEnabled` | Hiện/ẩn nút âm thanh |
| `musicUrl` | Để trống để dùng nhạc tổng hợp bằng Web Audio |

Ví dụ đổi `recipient` thành `"Mai Thi"` nếu đó là người bạn muốn gửi. Tên và nội dung mặc định không cần nhập mới có thể trải nghiệm.

### Thay nhạc

Âm thanh mặc định được tạo trực tiếp bằng dao động sine, không sử dụng bản ghi của bên thứ ba. Bấm “Bật nhạc” để cho phép phát; mở website không tự bật âm thanh.

Nếu có tệp nhạc được phép sử dụng, tạo thư mục `public/audio/`, chép `music.mp3` vào đó và đặt:

```json
"musicUrl": "audio/music.mp3"
```

Không thêm `/eternal-bloom/` vào `musicUrl`; ứng dụng tự thêm base. Tệp nhạc cũng sẽ công khai cùng website.

## 3. Đưa lên GitHub Pages (miễn phí)

Dự án đã có `base: '/eternal-bloom/'` và `.github/workflows/deploy.yml`. Workflow tự cài bằng `npm ci`, kiểm tra TypeScript, build và deploy khi push nhánh `main`.

### Cách A — GitHub Desktop (dễ nhất, giữ nguyên thư mục .github)

1. Đăng nhập GitHub, cài GitHub Desktop.
2. Chọn **File → Add local repository** và trỏ tới thư mục `eternal-bloom`. Nếu chưa là repository, chọn liên kết **create a repository here**. Tên repository: **eternal-bloom**. Đảm bảo không tạo thêm một lớp thư mục khiến `package.json` nằm trong thư mục con.
3. Commit toàn bộ mã nguồn. Nhánh cần tên **main**; đổi tên trong Branch → Rename nếu cần.
4. Chọn **Publish repository**, tên `eternal-bloom`. Với tài khoản GitHub Free, bỏ chọn **Keep this code private** để dùng Pages miễn phí. Nội dung lời chúc và tên người nhận sẽ công khai trong source.
5. Vào repository trên GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
6. Vào **Actions → Deploy Eternal Bloom to GitHub Pages → Run workflow → main → Run workflow**. Nếu workflow đã tự chạy thành công sau khi push thì không cần chạy lại.
7. Chờ hai job `build` và `deploy` có dấu xanh. Lấy đường link ở **Settings → Pages** hoặc phần deployment.

Đường link sẽ theo mẫu:

```text
https://TEN_USERNAME.github.io/eternal-bloom/
```

Những lần sau: sửa cấu hình/code, commit, push lên `main`; website tự cập nhật.

### Cách B — Git trong Terminal

Tạo repository **public**, tên **eternal-bloom**, không thêm README/.gitignore/license lúc tạo. Tại thư mục có `package.json`, chạy (thay TEN_USERNAME):

```bash
git init
git add .
git commit -m "Create Eternal Bloom"
git branch -M main
git remote add origin https://github.com/TEN_USERNAME/eternal-bloom.git
git push -u origin main
```

Sau đó bật Pages với **Source: GitHub Actions** và chạy workflow như cách A.

### Nếu upload bằng trình duyệt GitHub

Upload **nội dung bên trong** `eternal-bloom`, không upload nguyên ZIP, không để thêm thư mục bao ngoài. Bắt buộc có `.github/workflows/deploy.yml` và `package-lock.json` ở đúng vị trí. Nếu hộp upload bỏ qua thư mục bắt đầu bằng dấu chấm, dùng **Add file → Create new file**, tên `.github/workflows/deploy.yml`, rồi dán nội dung workflow từ source vào.

### Đổi tên repository

Nếu đổi thành `hoa-tang-em`, sửa `base` trong `vite.config.ts` thành `/hoa-tang-em/`, rồi commit và push. Không cần sửa đường dẫn trong React. Không có router phía client nên tải lại trang chủ không cần mẹo 404.

## 4. Cách trải nghiệm

- Bấm “Khám phá món quà”: thân hoa xuất hiện, từng lớp cánh mở qua xoay bản lề tại gốc cánh, camera tiến gần.
- Kéo chuột/vuốt: xoay; cuộn chuột/chụm hai ngón: zoom có giới hạn; nhấn đúp hoặc nút “Góc nhìn”: về vị trí đầu.
- Chạm cánh hoa: mở nhẹ thêm, ánh sáng và vòng hạt vàng, hiện một lời nhắn.
- Chạm **5 bông khác nhau**: mở chòm sao trái tim. Chạm thông điệp hoặc “Mở thư” để đọc thư.
- “Nở lần nữa” phát lại quá trình nở; giữ tiến độ khám phá để người nhận không mất lá thư.
- Bàn phím: Tab để tới các nút; có nút “Chạm hoa” hiện khi được focus, cho phép khám phá lần lượt 29 bông không cần chuột. Esc đóng lá thư.
- Âm nhạc khởi đầu tắt; nút âm thanh cho phép bật/tắt.

## 5. Cấu trúc và kỹ thuật

```text
public/gift-config.json       Cá nhân hóa, được fetch qua BASE_URL
src/FlowerGeometry.ts         Cánh hoa hai mặt có độ dày, màu gradient, cuống và ribbon
src/BouquetScene.ts           29 bông, 5 kiểu, giấy gói, ánh sáng, raycast, camera, hoạt ảnh
src/AudioGarden.ts            Nhạc sinh tổng hợp hoặc tệp MP3 tùy chọn
src/main.tsx                  Giao diện, lời nhắn, thiệp, trạng thái tải
src/style.css                 Giao diện desktop/mobile, reduced-motion
vite.config.ts                Base GitHub Pages
.github/workflows/deploy.yml  Build và triển khai tự động
```

Hoa hồng, mẫu đơn gợn sóng, tulip khum, cosmos có nhụy vàng, và hoa fantasy Aurora có cánh nhọn. Cánh là BufferGeometry với hai bề mặt và cạnh nối, không phải ảnh hay CSS 3D. Các cánh và nhụy lặp dùng InstancedMesh. Thân cong về một điểm buộc chung. Giấy gói là bề mặt có nếp gấp; nơ là dải ribbon theo spline. Chi tiết riêng: hai quỹ đạo vàng đan nhau tại nút buộc, như một con dấu tình yêu tí hon.

Bản cập nhật theo ảnh tham khảo: cánh hồng đào/ngọc trai có mép uốn lượn và độ dày lớn hơn; ba bông chính lớn hơn tạo điểm nhấn. Tâm hoa có vật liệu phát sáng vàng và ánh sáng cục bộ; thân màu đồng, lá thủy tinh xanh trong, nền xanh đêm. Vật liệu PBR dùng transmission, IOR, thickness, clearcoat và iridescence; môi trường phản chiếu studio sinh bằng code qua PMREM, không tải HDRI ngoài. Điện thoại dùng transmission thấp hơn; khi nhiều khung hình chậm, ứng dụng chuyển sang lớp phủ ngọc trai không khúc xạ để giảm tải. Hình ảnh là định hướng dựa trên ảnh tham khảo, chưa được xác nhận giống ảnh do giới hạn WebGL của môi trường kiểm thử. Ánh sáng được giữ rõ chi tiết, không dùng hậu kỳ bloom toàn màn hình để giảm tải điện thoại. Hiệu ứng lung linh dùng hạt và vật liệu phát sáng nhẹ. Chuyển động chính là xoay từng cánh theo lớp, không phóng to cả bông để giả nở.

Font được đóng gói trong build, không cần Google Fonts CDN. Không có ảnh/video bó hoa hoặc model tải ngoài. Không cần dịch vụ trả phí. Âm thanh tùy chọn là tệp duy nhất bạn cần tự cung cấp nếu không dùng nhạc sinh tổng hợp.

Pixel ratio bị giới hạn; máy có nhiều khung hình chậm tự hạ về 1; ít hạt hơn trên màn hình nhỏ. Tạm dừng render khi tab ẩn; giải phóng geometry/material/renderer khi gỡ scene. `prefers-reduced-motion` bỏ chuyển động camera tự động, đung đưa và nở chậm; thao tác xoay vẫn do người xem quyết định.

Thanh tiến độ phản ánh các mốc công việc thực tế: tải cấu hình → khởi tạo hình học → sẵn sàng. Không có model/texture ngoài cần tải; đây không phải phần trăm byte tải toàn bộ JavaScript ban đầu.

## 6. Kiểm tra và giới hạn xác minh

Xem `VALIDATION.md` để biết các phép kiểm tra đã chạy. Build thành công không đồng nghĩa đã xác nhận chất lượng hình ảnh trên mọi GPU. Trình duyệt kiểm thử của môi trường tạo dự án không tạo được WebGL context; đã xác nhận trang mở đầu và thông báo dự phòng, nhưng **chưa xác minh hình ảnh bó hoa, shader, raycast, touch thực tế, âm thanh và FPS trên thiết bị thật**. Không có ảnh chụp bó hoa giả làm kết quả render. Chưa triển khai lên tài khoản GitHub của bạn.

Trước khi gửi quà, hãy chạy trên Chrome máy tính và điện thoại thật, xem 29 bông hiển thị, thử xoay/zoom/nở lại/chạm 5 hoa/mở thư/bật nhạc. Sau deploy, kiểm tra lại link GitHub Pages và tab Network: `gift-config.json`, font, JavaScript và nhạc tùy chọn phải trả về 200.

## 7. Xử lý lỗi

- `ENOENT package.json`: đang mở sai thư mục; mở nơi có `package.json`.
- `npm` không nhận diện: cài Node.js và mở lại Terminal.
- 404 asset sau deploy: kiểm tra `base`, tên repository chính xác và Source là GitHub Actions.
- Không có workflow: kiểm tra `.github/workflows/deploy.yml` đã push lên `main`.
- `npm ci` báo lock không khớp: chạy `npm install`, commit cả `package.json` và `package-lock.json`.
- WebGL lỗi: cập nhật trình duyệt, bật tăng tốc đồ họa và thử đóng bớt tab. Ứng dụng cần WebGL2, không thay thế bằng ảnh 2D.
- Giật trên điện thoại: đóng các ứng dụng nặng, dùng zoom vừa phải; chất lượng tự giảm sau nhiều khung chậm. FPS chưa được đo trên Redmi Note 13 hoặc iPhone.
- Nhạc không phát: bấm nút bật nhạc; nếu dùng MP3 hãy kiểm tra vị trí `public/audio/` và quyền sử dụng tệp.

## Tài liệu triển khai chính thức

- https://vite.dev/guide/static-deploy.html#github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://threejs.org/docs/

Font Cormorant Garamond và Be Vietnam Pro dùng giấy phép SIL Open Font License; các thông báo giấy phép được cung cấp trong `THIRD_PARTY_LICENSES.txt`.
