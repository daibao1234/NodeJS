
# Bài 08 – Quản lý tập tin với File System

## 1. Mô tả

Sử dụng module `fs` trong Node.js để tạo thư mục, tạo và ghi nội dung vào tập tin, đổi tên, đọc nội dung và xóa tập tin.

## 2. Các bước thực hiện

 Bước 1: Mở Terminal tại thư mục Bt08.
 Bước 2: Chạy chương trình bằng lệnh:

```bash
node bai08.js
```

 Bước 3: Tạo thư mục `data` và tập tin `ghichu.txt`.
 Bước 4: Ghi 3 dòng nội dung vào tập tin.
 Bước 5: Đổi tên `ghichu.txt` thành `ghichu_moi.txt`.
 Bước 6: Đọc và hiển thị nội dung tập tin sau khi đổi tên.
 Bước 7: Tạo tập tin `tam.txt` và xóa bằng `fs.unlinkSync()`.

## 3. Kết quả thực hiện

Chương trình chạy thành công, thực hiện đầy đủ các thao tác tạo thư mục, ghi tập tin, đổi tên, đọc nội dung và xóa tập tin tạm. Sau khi hoàn thành, thư mục `data` còn lại tập tin `ghichu_moi.txt`.

## 4. Hình ảnh minh chứng

### Ảnh 1: Kết quả chạy chương trình trên Terminal

<img width="655" height="462" alt="anh 3 8 p1" src="https://github.com/user-attachments/assets/433c5e23-0792-46d7-902e-720bef7f71c7" />


### Ảnh 2: Nội dung tập tin ghichu_moi.txt

<img width="794" height="214" alt="anh 3 8 p2" src="https://github.com/user-attachments/assets/ec899cf3-44e3-482c-839b-8023a1d879a5" />

### Ảnh 3: Cấu trúc thư mục sau khi thực hiện

<img width="356" height="102" alt="anh 3 8 p3 " src="https://github.com/user-attachments/assets/2cea8963-778e-49cb-ae02-67ec33ead855" />
