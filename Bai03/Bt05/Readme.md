# Bài thực hành 05 – Truy vấn và cập nhật MongoDB

## 1. Nội dung thực hiện

Sử dụng Node.js kết hợp MongoDB để truy vấn, sắp xếp và cập nhật thông tin sinh viên trong database `qlsinhvien`, collection `students`.

 Sử dụng `find()` kết hợp `$gte` để tìm sinh viên có điểm từ 7 trở lên.
 Sử dụng `sort()` để sắp xếp danh sách theo điểm giảm dần.
 Sử dụng `updateOne()` kết hợp `$set` để cập nhật điểm sinh viên theo mã sinh viên.
 Sử dụng `findOne()` để hiển thị thông tin sau khi cập nhật.
 Đóng kết nối MongoDB sau khi hoàn thành.

## 2. Các bước thực hiện

**Bước 1:** Mở Terminal tại thư mục chứa tập tin `bai05.js`.

**Bước 2:** Cài đặt thư viện MongoDB bằng lệnh:

```bash
npm install mongodb
```

**Bước 3:** Đảm bảo MongoDB đang hoạt động và chạy chương trình:

```bash
node bai05.js
```

**Bước 4:** Quan sát danh sách sinh viên được lọc và sắp xếp trên Terminal.

**Bước 5:** Kiểm tra thông tin sinh viên sau khi cập nhật điểm.

## 3. Hình ảnh thực hiện

### Kết quả chạy chương trình trên Terminal

<img width="771" height="479" alt="anh 3 5 anh 1" src="https://github.com/user-attachments/assets/d0ca07aa-9386-4be8-8c1f-2fed58c6cc81" />

### Kiểm tra thông tin sinh viên sau cập nhật trong MongoDB Compass

<img width="1231" height="492" alt="bai 3 5 anh 2" src="https://github.com/user-attachments/assets/6232dea0-ea7c-434c-8675-de60bfcb8af5" />


## 4. Kết quả thực hiện

Chương trình kết nối MongoDB thành công, tìm được danh sách sinh viên có điểm từ 7 trở lên và sắp xếp theo thứ tự giảm dần. Tiếp theo, chương trình cập nhật điểm sinh viên SV002 bằng `updateOne()` và `$set`, sau đó hiển thị lại thông tin để kiểm tra kết quả cập nhật.
