# Bài 02 - Xây dựng Web Server bằng Node.js

## 1. Nội dung thực hiện

- Sử dụng module `http` để tạo Web Server chạy tại cổng 3000.
- Khi truy cập `/`, trang web hiển thị lời chào, họ tên và mã sinh viên.
- Khi nhấn nút **THÔNG TIN SV**, chuyển đến đường dẫn `/about` để hiển thị thông tin sinh viên.
- Khi truy cập đường dẫn không tồn tại, server trả về mã trạng thái HTTP 404.
- Sử dụng HTML và CSS để thiết kế giao diện trang web.

## 2. Các bước chạy chương trình

**Bước 1:** Mở thư mục `Bt02` bằng Visual Studio Code.

**Bước 2:** Mở Terminal trong Visual Studio Code.

**Bước 3:** Chạy chương trình bằng lệnh:

```bash
node bai02.js
```

**Bước 4:** Khi Terminal thông báo Server đang chạy tại `http://localhost:3000`, mở trình duyệt để kiểm tra.

**Bước 5:** Truy cập các đường dẫn sau:

- Trang chủ: http://localhost:3000/
- Thông tin sinh viên: http://localhost:3000/about
- Trang không tồn tại: http://localhost:3000/abc

## 3. Kết quả thực hiện

- Web Server khởi động thành công tại cổng 3000.
- Trang chủ hiển thị lời chào, họ tên và mã sinh viên.
- Nhấn nút **THÔNG TIN SV** để xem thông tin giới thiệu sinh viên.
- Đường dẫn không tồn tại trả về trạng thái HTTP 404.

## 4. Hình ảnh kết quả

**Hình 1: Khởi động Web Server**

<img width="639" height="76" alt="Bai03 2 anh 1" src="https://github.com/user-attachments/assets/ff2c86c3-5dbc-4664-a175-1c1712fedc46" />

**Hình 2: Giao diện trang chủ**

<img width="1592" height="703" alt="Bai03 2 anh 2" src="https://github.com/user-attachments/assets/2b3bb430-0de6-4b09-b7b4-4277a249de44" />


**Hình 3: Thông tin sinh viên**

<img width="922" height="649" alt="Bai03 2 anh 3" src="https://github.com/user-attachments/assets/347f6888-9384-4d2d-af4d-ed703a0b43f0" />


**Hình 4: Trang lỗi 404**

<img width="1109" height="608" alt="Bai3 2 anh 4 " src="https://github.com/user-attachments/assets/e718db5a-5cb1-4efa-b20b-0115382d8a94" />

