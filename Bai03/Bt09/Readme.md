
# Bài 09 – Xóa dữ liệu có điều kiện trong MongoDB

## 1. Mô tả

Sử dụng Node.js kết nối MongoDB để quản lý dữ liệu sinh viên trong database `qlsinhvien`, collection `students_test`. Thực hiện thêm dữ liệu mẫu, xóa một sinh viên theo mã, xóa các sinh viên có điểm dưới 5 và hiển thị danh sách còn lại.

## 2. Các bước thực hiện

 Bước 1: Khởi động MongoDB Server.
 Bước 2: Mở Terminal tại thư mục Bt09.
 Bước 3: Cài đặt thư viện MongoDB bằng lệnh:

```bash
npm install mongodb
```

- Bước 4: Chạy chương trình bằng lệnh:

```bash
node bai09.js
```

 Bước 5: Kết nối database `qlsinhvien` và collection `students_test`.
 Bước 6: Thêm 6 sinh viên mẫu vào collection.
 Bước 7: Sử dụng `deleteOne()` xóa sinh viên có mã `CDCNTT18B002`.
 Bước 8: Sử dụng `deleteMany()` xóa các sinh viên có điểm dưới 5.
 Bước 9: Sử dụng `find()` hiển thị danh sách sinh viên còn lại.

## 3. Kết quả thực hiện

Chương trình kết nối MongoDB thành công và thêm 6 sinh viên vào collection `students_test`.

Kết quả thực hiện:
 Xóa theo mã sinh viên: 1 bản ghi.
 Xóa sinh viên có điểm dưới 5: 2 bản ghi.
 Số sinh viên còn lại: 3.

Các thao tác được thực hiện thành công, danh sách sinh viên sau khi xóa được hiển thị trên Terminal và lưu trong MongoDB.

## 4. Hình ảnh minh chứng

### Ảnh 1: Kết quả thực hiện chương trình trên Terminal

<img width="458" height="677" alt="anh 3 9 p1" src="https://github.com/user-attachments/assets/10de1dc6-76a2-46e3-acbf-0adc19770d44" />


### Ảnh 2: Danh sách sinh viên còn lại trong MongoDB Compass

<img width="1270" height="543" alt="anh 3 9 p2" src="https://github.com/user-attachments/assets/280c1589-4e13-4f6c-941c-429d9ef8d001" />


