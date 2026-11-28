# Bài 01: Xây dựng website giới thiệu cá nhân (Express Framework)

- **Sinh viên thực hiện:** Cao Bảo Đại
- **MSSV:** CDCNTT18B07
- **Đường dẫn ứng dụng đã triển khai:** https://caobaodai-bai04-bt01.onrender.com

---

## Phần 1: Thực hiện và kiểm thử trên máy cá nhân (Localhost)

### 1. Các lệnh thực hiện
```bash
mkdir Bt01
cd Bt01
npm init -y
npm install express
node app.js
```

### 2. Hình ảnh các bước thực hiện và kết quả trên Localhost

#### Hình 1: Khởi tạo dự án, cài đặt Express và khởi chạy server
![Cài đặt Express và chạy server]

<img width="638" height="196" alt="B4_1" src="https://github.com/user-attachments/assets/d9f4d765-edc0-4783-8fb2-c01dfae030eb" />


#### Hình 2: Giao diện Trang chủ (`/`)
![Trang chủ]

<img width="1529" height="767" alt="png 2" src="https://github.com/user-attachments/assets/93208bb7-2f30-4f44-a8e0-928cda15f17a" />


#### Hình 3: Giao diện Trang Giới thiệu (`/about`)
![Trang giới thiệu]

<img width="1561" height="842" alt="png 3" src="https://github.com/user-attachments/assets/25a581c8-9a6d-4452-ab4d-996b2ffa7cbf" />



#### Hình 4: Giao diện Trang Kỹ năng (`/skills`)
![Trang kỹ năng]

<img width="1202" height="748" alt="png 4" src="https://github.com/user-attachments/assets/2000d912-94fc-411e-8b29-c707a0700ab2" />


#### Hình 5: Giao diện Trang Sở thích 
![Trang sở thích và liên hệ]

<img width="1287" height="701" alt="image" src="https://github.com/user-attachments/assets/79def149-6f07-4114-b1d7-f9a72700d74d" />


#### Hình 6: Xử lý đường dẫn không tồn tại (HTTP 404)
![Trang lỗi 404]

<img width="1600" height="840" alt="png 6" src="https://github.com/user-attachments/assets/ee954d98-1436-4f58-b1b5-19e2f8efbd87" />



---

## Phần 2: Khảo sát Free Hosting và Triển khai ứng dụng

### 1. Khảo sát 3 dịch vụ Hosting miễn phí hỗ trợ Node.js
| STT | Dịch vụ Hosting | Đặc điểm nổi bật | Gói miễn phí |
| :--- | :--- | :--- | :--- |
| 1 | **Render** (`render.com`) | Kết nối trực tiếp GitHub, tự động build & deploy khi push code, hỗ trợ `Root Directory` và cấp sẵn HTTPS miễn phí | Có (Web Service Free, tự ngủ sau 15 phút không truy cập) |
| 2 | **Koyeb** (`koyeb.com`) | Hỗ trợ deploy từ GitHub hoặc Docker, chạy mượt ứng dụng Node.js/Express | Có (1 Nano service miễn phí) |
| 3 | **Glitch** (`glitch.com`) | Chỉnh sửa và chạy trực tiếp trên trình duyệt, phù hợp cho demo Node.js nhỏ | Có (Project công khai miễn phí) |

=> **Dịch vụ lựa chọn triển khai:** **Render** vì dễ kết nối GitHub, hỗ trợ trỏ thẳng vào thư mục con `Bai04/Bt01` và cấp sẵn tên miền HTTPS công khai.

### 2. Các bước triển khai trên Render
1. Đẩy mã nguồn thư mục `Bt01` (`app.js`, `package.json`, `package-lock.json`, `views/`, `public/`) lên repository `daibao1234/NodeJS` trên GitHub.
2. Đăng nhập **Render** bằng tài khoản GitHub -> chọn **New Web Service** -> kết nối repository `NodeJS`.
3. Thiết lập thông số triển khai:
   - **Name:** `caobaodai-bai04-bt01`
   - **Region:** `Singapore (Southeast Asia)`
   - **Root Directory:** `Bai04/Bt01`
   - **Build Command:** `npm install`
   - **Start Command:** `node app.js`
   - **Instance Type:** `Free`
4. Nhấn **Deploy web service** và chờ quá trình build hoàn tất (trạng thái **Live**).

### 3. Kết quả triển khai thực tế
- **Đường link ứng dụng đã triển khai thành công:** https://caobaodai-bai04-bt01.onrender.com

#### Hình 7: Trạng thái Deploy thành công (Live) trên Render
![Triển khai thành công trên Render]

<img width="1580" height="763" alt="B4_7" src="https://github.com/user-attachments/assets/dcf01032-84da-444a-bb87-aead0db299ae" />


#### Hình 8: Kết quả truy cập website thực tế qua tên miền Render
![Website hoạt động trên Render]

<img width="1600" height="855" alt="png 8" src="https://github.com/user-attachments/assets/f07b8776-5503-4b6d-8b37-228de8897f8a" />

