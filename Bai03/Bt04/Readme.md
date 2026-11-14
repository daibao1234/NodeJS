# Bài thực hành 04 – Kết nối MongoDB

## 1. Nội dung thực hiện

Sử dụng Node.js kết hợp thư viện MongoDB để thực hiện các thao tác với cơ sở dữ liệu.

 Kết nối MongoDB đang chạy trên máy.
 Sử dụng database `qlsinhvien` và collection `students`.
 Sử dụng `insertMany()` để thêm 3 sinh viên gồm mã sinh viên, họ tên, tuổi và điểm.
 Sử dụng `find()` để tìm và hiển thị danh sách sinh viên.
 Đóng kết nối MongoDB sau khi hoàn thành.

## 2. Các bước thực hiện

**Bước 1:** Mở Terminal tại thư mục chứa tập tin `bai04.js`.

**Bước 2:** Cài đặt thư viện MongoDB bằng lệnh:

```bash
npm install mongodb
```

**Bước 3:** Đảm bảo MongoDB đang hoạt động và chạy chương trình bằng lệnh:

```bash
node bai04.js
```

**Bước 4:** Kiểm tra danh sách sinh viên hiển thị trên Terminal.

**Bước 5:** Mở MongoDB Compass, chọn database `qlsinhvien` và collection `students` để kiểm tra dữ liệu đã lưu.

## 3. Hình ảnh thực hiện

### Kết quả chạy chương trình trên Terminal
<img width="729" height="686" alt="Bai3 4 anh 1" src="https://github.com/user-attachments/assets/5c049805-13bb-4d94-9083-ff1c52fd9364" />

### Hình 2. Dữ liệu sinh viên trong MongoDB Compass

<img width="1271" height="509" alt="Bai3 4 anh 2" src="https://github.com/user-attachments/assets/1da3165f-5fef-4530-a365-7ab335a5549a" />


## 4. Kết quả thực hiện

Chương trình kết nối MongoDB thành công, thêm được 3 sinh viên vào database `qlsinhvien`, collection `students` bằng phương thức `insertMany()`. Sau đó, sử dụng `find()` để hiển thị danh sách sinh viên trên Terminal và đóng kết nối sau khi hoàn thành.
