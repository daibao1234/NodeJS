
# Bài 10 – Liên kết hai Collection trong MongoDB

## 1. Mô tả

Sử dụng Node.js và MongoDB để liên kết dữ liệu giữa hai collection `departments` và `students_join`. Áp dụng `aggregate()` kết hợp `$lookup` để hiển thị danh sách sinh viên kèm tên khoa tương ứng.

## 2. Các bước thực hiện

 Bước 1: Khởi động MongoDB Server.
 Bước 2: Mở Terminal tại thư mục Bt10.
 Bước 3: Cài đặt thư viện MongoDB nếu máy chưa có:

```bash
npm install mongodb
```

- Bước 4: Chạy chương trình bằng lệnh:

```bash
node bai10.js
```

 Bước 5: Tạo collection `departments` và thêm dữ liệu các khoa.
 Bước 6: Tạo collection `students_join` và thêm 6 sinh viên.
 Bước 7: Sử dụng `aggregate()` kết hợp `$lookup` để liên kết hai collection thông qua trường `makhoa`.
 Bước 8: Sử dụng `$project` để hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.
 Bước 9: Hiển thị danh sách sinh viên kèm tên khoa trên Terminal.

## 3. Kết quả thực hiện

Chương trình kết nối MongoDB thành công, tạo dữ liệu cho 2 collection gồm 2 khoa và 6 sinh viên.

Sử dụng `aggregate()` kết hợp `$lookup` để liên kết sinh viên với khoa thông qua mã khoa `makhoa`. Kết quả hiển thị đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa tương ứng.

Cả 6 sinh viên đều được liên kết và hiển thị thông tin khoa thành công.

## 4. Hình ảnh minh chứng

### Ảnh 1: Kết quả thực hiện chương trình trên Terminal

<img width="528" height="755" alt="anh 3 10 p1" src="https://github.com/user-attachments/assets/36b8dc71-da5b-4bb0-ba53-abda076be152" />


### Ảnh 2: Dữ liệu collection departments trong MongoDB Compass

<img width="929" height="556" alt="anh 3 10 p2" src="https://github.com/user-attachments/assets/6dfb10a3-d515-4e8a-8bc2-40f101e6952f" />


### Ảnh 3: Dữ liệu collection students_join trong MongoDB Compass

<img width="1206" height="711" alt="anh 3 10 p3" src="https://github.com/user-attachments/assets/73dd6772-53d8-4cb1-8b56-ec15925d7289" />


