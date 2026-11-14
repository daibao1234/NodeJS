# Bài thực hành 03 – Module File System (fs)

## 1. Nội dung thực hiện

Sử dụng module `fs` trong Node.js để tạo, đọc và cập nhật tập tin `thongtin.txt`.

- Tạo tập tin chứa họ tên và mã sinh viên.
- Đọc và hiển thị nội dung tập tin lên Terminal.
- Sử dụng `appendFile()` để ghi nối thêm tên lớp vào cuối tập tin.
- Đọc lại tập tin để kiểm tra nội dung sau cập nhật.

## 2. Các bước thực hiện

**Bước 1:** Mở Terminal tại thư mục chứa tập tin `bai03.js`.

**Bước 2:** Nhập lệnh chạy chương trình:

```bash
node bai03.js
```

**Bước 3:** Quan sát kết quả hiển thị trên Terminal.

**Bước 4:** Mở tập tin `thongtin.txt` để kiểm tra nội dung sau khi cập nhật.

## 3. Hình ảnh thực hiện

### Hình 1. Chạy chương trình bằng lệnh node bai03.js

<img width="762" height="269" alt="bai3 3 anh 1 " src="https://github.com/user-attachments/assets/63f8da5b-dab9-4d00-aa46-f55441c4b19c" />


### Hình 2. Kiểm tra nội dung tập tin thongtin.txt

<img width="694" height="236" alt="bai3 3 anh 2" src="https://github.com/user-attachments/assets/5a71853b-7a59-4754-8c9d-e5c9d695a8fb" />


## 4. Kết quả thực hiện

Chương trình chạy thành công, tạo được tập tin `thongtin.txt`, đọc và hiển thị nội dung lên Terminal. Sau khi ghi nối thêm tên lớp bằng `appendFile()`, chương trình đọc lại và hiển thị đầy đủ nội dung đã cập nhật.
