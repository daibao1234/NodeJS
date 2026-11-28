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

![Bước 1 - Cài đặt thư viện]

<img width="614" height="74" alt="bai4_1" src="https://github.com/user-attachments/assets/9f4f8e26-149a-49a1-a4dc-8bf38a79a784" />


### Bước 2: Ứng dụng Express cơ bản (`app.js`)
<!-- Chèn ảnh minh chứng Bước 2 (VD: ./images/step2-app.png) -->
![Bước 2 - Express App]

<img width="784" height="297" alt="Bai4_2" src="https://github.com/user-attachments/assets/2fb4f39b-5cfb-457a-ac93-87d338f27dce" />


### Bước 3: Định tuyến Route (`express_route.js`)

![Bước 3 - Route]

<img width="784" height="316" alt="Bai4_3" src="https://github.com/user-attachments/assets/dae40869-03dd-49d4-a708-d2a7707da185" />


### Bước 4: Middleware ghi log yêu cầu (`express_middleware.js`)

![Bước 4 - Middleware]

<img width="810" height="302" alt="Bai4_4" src="https://github.com/user-attachments/assets/1e3d00e4-3928-4138-9e16-81293115b557" />


### Bước 5: Template Engine Pug (`express_pug.js` & `views/index.pug`)

![Bước 5 - Pug]

<img width="812" height="348" alt="Bai4_5" src="https://github.com/user-attachments/assets/2e973407-5924-437c-9d48-d5a5aae3c84f" />


### Bước 6: Xử lý lỗi và kiểm tra dữ liệu đầu vào (`express_errorhandling.js`)

![Bước 6 - Error Handling]

<img width="814" height="335" alt="Bai4_6" src="https://github.com/user-attachments/assets/5fa1a8fb-6ddf-4988-af90-994bc39acee5" />


### Bước 7: Ứng dụng Calculator theo mô hình MVC (`my-express-app`)

![Bước 7 - MVC Calculator]

<img width="1346" height="554" alt="Bai4_7" src="https://github.com/user-attachments/assets/c0105b7d-2d2d-4e08-a6a3-37e46606e7ff" />


## 4. Kết quả cuối cùng
- Đã cài đặt thành công Express cùng các gói `pug` và `body-parser`.
- Đã triển khai và chạy thử nghiệm đầy đủ các nội dung cơ bản của Express: khởi tạo server, định tuyến (Route), Middleware, Template Engine Pug và xử lý lỗi (Error Handling).
- Đã xây dựng hoàn chỉnh ứng dụng máy tính (`Calculator`) theo mô hình MVC chạy tại `http://localhost:3000/calculator`.
