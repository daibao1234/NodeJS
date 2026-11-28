# Bài 4: Xây dựng web với nền tảng Express (Express Framework) - Bài tập ví dụ

## 1. Cấu trúc thư mục
Baitapvidu/
├── .gitignore
├── Readme.md
├── package.json
├── package-lock.json
├── app.js
├── express_route.js
├── express_middleware.js
├── express_pug.js
├── express_errorhandling.js
├── images/
├── views/
│   └── index.pug
└── my-express-app/
    ├── app.js
    ├── controllers/
    │   └── calculatorController.js
    ├── models/
    │   └── calculatorModel.js
    ├── views/
    │   └── calculator.pug
    └── public/
        └── styles.css

## 2. Các lệnh thực hiện
npm init -y
npm install express pug body-parser

node app.js
node express_route.js
node express_middleware.js
node express_pug.js
node express_errorhandling.js

cd my-express-app
node app.js

## 3. Hình ảnh minh chứng các bước thực hiện và kết quả

### Bước 1: Khởi tạo dự án và cài đặt thư viện (`express`, `pug`, `body-parser`)
<!-- Chèn ảnh minh chứng Bước 1 (VD: ./images/step1-install.png) -->
![Bước 1 - Cài đặt thư viện](./images/step1-install.png)

### Bước 2: Ứng dụng Express cơ bản (`app.js`)
<!-- Chèn ảnh minh chứng Bước 2 (VD: ./images/step2-app.png) -->
![Bước 2 - Express App](./images/step2-app.png)

### Bước 3: Định tuyến Route (`express_route.js`)
<!-- Chèn ảnh minh chứng Bước 3 (VD: ./images/step3-route.png) -->
![Bước 3 - Route](./images/step3-route.png)

### Bước 4: Middleware ghi log yêu cầu (`express_middleware.js`)
<!-- Chèn ảnh minh chứng Bước 4 (VD: ./images/step4-middleware.png) -->
![Bước 4 - Middleware](./images/step4-middleware.png)

### Bước 5: Template Engine Pug (`express_pug.js` & `views/index.pug`)
<!-- Chèn ảnh minh chứng Bước 5 (VD: ./images/step5-pug.png) -->
![Bước 5 - Pug](./images/step5-pug.png)

### Bước 6: Xử lý lỗi và kiểm tra dữ liệu đầu vào (`express_errorhandling.js`)
<!-- Chèn ảnh minh chứng Bước 6 (VD: ./images/step6-error.png) -->
![Bước 6 - Error Handling](./images/step6-error.png)

### Bước 7: Ứng dụng Calculator theo mô hình MVC (`my-express-app`)
<!-- Chèn ảnh minh chứng Bước 7 (VD: ./images/step7-mvc.png) -->
![Bước 7 - MVC Calculator](./images/step7-mvc.png)

## 4. Kết quả cuối cùng
- Đã cài đặt thành công Express cùng các gói `pug` và `body-parser`.
- Đã triển khai và chạy thử nghiệm đầy đủ các nội dung cơ bản của Express: khởi tạo server, định tuyến (Route), Middleware, Template Engine Pug và xử lý lỗi (Error Handling).
- Đã xây dựng hoàn chỉnh ứng dụng máy tính (`Calculator`) theo mô hình MVC chạy tại `http://localhost:3000/calculator`.