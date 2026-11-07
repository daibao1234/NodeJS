
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thông tin sinh viên - Node.js</title>

        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #d1fae5, #ecfdf5);
                margin: 0;
                padding: 60px 15px;
                text-align: center;
                min-height: 100vh;
                box-sizing: border-box;
            }

            .container {
                max-width: 600px;
                margin: 40px auto;
                background: #ffffff;
                padding: 40px 30px;
                border-radius: 18px;
                box-shadow: 0 10px 30px rgba(5, 150, 105, 0.15);
                border: 1px solid #a7f3d0;
            }

            h1 {
                color: #059669;
                font-size: 34px;
                margin: 0 0 12px;
                letter-spacing: 1px;
            }

            .subtitle {
                color: #6b7280;
                font-size: 15px;
                margin-bottom: 30px;
            }

            h2 {
                color: #065f46;
                font-size: 21px;
                margin-bottom: 22px;
            }

            .info {
                background: #ecfdf5;
                border: 1px solid #a7f3d0;
                border-radius: 12px;
                padding: 10px 20px;
                text-align: left;
            }

            .info p {
                color: #374151;
                font-size: 16px;
                padding: 14px 5px;
                margin: 0;
                border-bottom: 1px solid #d1fae5;
                line-height: 1.6;
            }

            .info p:last-child {
                border-bottom: none;
            }

            strong {
                color: #059669;
                display: inline-block;
                min-width: 165px;
            }

            footer {
                color: #6b7280;
                font-size: 13px;
                margin-top: 30px;
            }
        </style>
    </head>

    <body>
        <div class="container">

            <h1>HELLO WORLD!</h1>
            <p class="subtitle">Ứng dụng HTTP Server với Node.js</p>

            <h2>THÔNG TIN SINH VIÊN</h2>

            <div class="info">
                <p>
                    <strong>Họ và tên:</strong>
                    Cao Bảo Đại
                </p>

                <p>
                    <strong>Mã số sinh viên:</strong>
                    CDCNTT18B07
                </p>
            </div>

            <footer>
                Node.js HTTP Server all rights reserved | Port 3000
            </footer>

        </div>
    </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
