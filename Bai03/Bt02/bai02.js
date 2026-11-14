
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Thông tin sinh viên
    const sinhVien = {
        hoTen: 'Cao Bảo Đại',
        maSV: 'SV001',
        truong: 'Cao đẳng Kỹ thuật Công nghệ Nha Trang',
        nganh: 'Công nghệ thông tin',
        lop: 'CDCNTT18B',
        soThich: 'Lập trình và tìm hiểu công nghệ'
    };

    // CSS giao diện
    const style = `
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #dbeafe, #eff6ff);
                color: #334155;
            }

            .container {
                width: 90%;
                max-width: 650px;
                margin: 90px auto;
                padding: 40px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                text-align: center;
            }

            h1 {
                color: #1d4ed8;
                margin-bottom: 20px;
            }

            .student-name {
                font-size: 23px;
                font-weight: bold;
                color: #1e293b;
            }

            .student-id {
                font-size: 18px;
                margin: 15px 0 30px;
            }

            .btn {
                display: inline-block;
                padding: 13px 25px;
                background: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                transition: 0.3s;
            }

            .btn:hover {
                background: #1e40af;
            }

            .info {
                text-align: left;
                margin-top: 25px;
                line-height: 2;
            }

            .info p {
                border-bottom: 1px solid #e2e8f0;
                padding-bottom: 8px;
            }
        </style>
    `;

    // Trang chủ
    if (url === '/') {
        res.statusCode = 200;

        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>Trang chủ sinh viên</title>
                ${style}
            </head>
            <body>
                <div class="container">
                    <h1>Xin chào!</h1>

                    <p>Chào mừng bạn đến với trang cá nhân của</p>

                    <div class="student-name">
                        ${sinhVien.hoTen}
                    </div>

                    <div class="student-id">
                        Mã sinh viên: ${sinhVien.maSV}
                    </div>

                    <a href="/about" class="btn">
                        Thông tin sinh viên
                    </a>
                </div>
            </body>
            </html>
        `);
    }

    // Trang thông tin sinh viên
    else if (url === '/about') {
        res.statusCode = 200;

        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>Thông tin sinh viên</title>
                ${style}
            </head>
            <body>
                <div class="container">
                    <h1>THÔNG TIN SINH VIÊN</h1>

                    <div class="info">
                        <p><strong>Họ và tên:</strong> ${sinhVien.hoTen}</p>
                        <p><strong>Mã sinh viên:</strong> ${sinhVien.maSV}</p>
                        <p><strong>Trường:</strong> ${sinhVien.truong}</p>
                        <p><strong>Ngành học:</strong> ${sinhVien.nganh}</p>
                        <p><strong>Lớp:</strong> ${sinhVien.lop}</p>
                        <p><strong>Sở thích:</strong> ${sinhVien.soThich}</p>
                    </div>

                    <a href="/" class="btn">
                        Quay lại trang chủ
                    </a>
                </div>
            </body>
            </html>
        `);
    }

    // Trang lỗi 404
    else {
        res.statusCode = 404;

        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>404 - Not Found</title>
                ${style}
            </head>
            <body>
                <div class="container">
                    <h1>404 - Không tìm thấy trang!</h1>
                    <p>Đường dẫn bạn truy cập không tồn tại.</p>
                    <a href="/" class="btn">Quay về trang chủ</a>
                </div>
            </body>
            </html>
        `);
    }
});

// Khởi động Web Server tại cổng 3000
server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
