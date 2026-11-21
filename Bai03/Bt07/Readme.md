
# Bài 07 – Xử lý tham số URL trên Web Server

## 1. Mô tả

Xây dựng chương trình Node.js sử dụng module HTTP và đối tượng URL để tạo Web Server, xử lý các tham số truyền qua đường dẫn URL.

Chương trình thực hiện chức năng chào hỏi người dùng, tính tổng hai số và thông báo lỗi khi thiếu tham số, dữ liệu không hợp lệ hoặc truy cập đường dẫn không tồn tại.

## 2. Các tập tin chương trình

`bai07.js`: Sử dụng module `http` và đối tượng `URL` để tạo Web Server tại cổng 3001, xử lý tham số URL và trả về kết quả tương ứng.

## 3. Các bước thực hiện

1. Tạo tập tin `bai07.js`.
2. Nhập mã nguồn và lưu tập tin.
3. Mở Terminal tại thư mục Bt07.
4. Chạy chương trình bằng lệnh:

```bash
node bai07.js
```

5. Mở trình duyệt và truy cập các đường dẫn để kiểm tra:

 Trang chủ: `http://localhost:3001`
 Chào hỏi: `http://localhost:3001/hello?name=Minh`
 Tính tổng: `http://localhost:3001/sum?a=10&b=20`
 Kiểm tra lỗi 404: `http://localhost:3001/test`

## 4. Kết quả thực hiện

Chương trình chạy thành công tại cổng 3001, xử lý được các tham số URL và trả về kết quả theo yêu cầu.

 Chức năng Hello: Xin chào Minh.
 Chức năng Sum: Tổng = 30.
 Lỗi 404: Thông báo không tìm thấy đường dẫn khi truy cập URL không tồn tại.

## 5. Hình ảnh minh họa

### Khởi chạy chương trình trên Terminal
<img width="699" height="277" alt="anh 3 7 p1" src="https://github.com/user-attachments/assets/e44f303e-32b6-4ea8-b93e-e338376cc76b" />


### Giao diện Web Server
<img width="1587" height="688" alt="anh 3 7 p2" src="https://github.com/user-attachments/assets/f3d8f3f8-e813-440d-8cce-262078c50309" />


### Kết quả chức năng Hello
<img width="801" height="273" alt="anh 3 7 p3" src="https://github.com/user-attachments/assets/3e0f9a62-11d3-43ce-a94d-93f8a2f42762" />


### Kết quả chức năng tính tổng
<img width="807" height="300" alt="anh 3 7 p4" src="https://github.com/user-attachments/assets/e0f49d69-7229-4e2b-8123-aa3ea12f8477" />


### Kết quả kiểm tra lỗi 404
<img width="806" height="325" alt="anh 3 7 p5 " src="https://github.com/user-attachments/assets/a1be8dc7-793f-4b5b-8d3a-bb9765750558" />


