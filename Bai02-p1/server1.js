
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
                background: linear-gradient(135deg, #e0ecff, #f4f7fb);
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
                border-radius: 16px;
                box-shadow: 0 8px 25px rgba(37, 99, 235, 0.10);
                border: 1px solid #e5edfa;
            }

            h1 {
                color: #2563eb;
                font-size: 34px;
                margin: 0 0 12px;
                letter-spacing: 1px;
            }

            .subtitle {
                color: #64748b;
                font-size: 15px;
                margin-bottom: 30px;
            }

            h2 {
                color: #334155;
                font-size: 20px;
                margin-bottom: 22px;
            }

            .info {
                background: #f8faff;
                border: 1px solid #e2eaf8;
                border-radius: 12px;
                padding: 10px 20px;
                text-align: left;
            }

            .info p {
                color: #475569;
                font-size: 16px;
                padding: 12px 5px;
                margin: 0;
                border-bottom: 1px solid #e8eef7;
                line-height: 1.6;
            }

            .info p:last-child {
                border-bottom: none;
            }

            strong {
                color: #2563eb;
                display: inline-block;
                min-width: 145px;
            }

            footer {
                color: #94a3b8;
                font-size: 13px;
                margin-top: 30px;
            }
        </style>
    </head>

    <body>
        <div class="container">

            <h1>HELLO WORLD!</h1>
            <p class="subtitle">Chào mừng đến với Node.js</p>

            <h2>Thông tin sinh viên</h2>

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
                Node.js HTTP Server | Port 3000
            </footer>

        </div>
    </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
