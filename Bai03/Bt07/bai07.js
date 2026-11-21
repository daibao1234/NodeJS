
const http = require('http');
const { URL } = require('url');

const PORT = 3001;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    if (path === '/hello') {
        const name = url.searchParams.get('name');

        if (!name || !name.trim()) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Vui lòng nhập tham số name hợp lệ.');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Xin chào ${name.trim()}`);
        return;
    }

    if (path === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null || a.trim() === '' || b.trim() === '') {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Vui lòng cung cấp đầy đủ hai tham số a và b.');
            return;
        }

        const numA = Number(a);
        const numB = Number(b);

        if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Giá trị a và b phải là số hợp lệ.');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Tổng = ${numA + numB}`);
        return;
    }

    if (path !== '/') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Lỗi 404: Không tìm thấy đường dẫn.');
        return;
    }

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>URL Processor</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    min-height: 100vh;
                    background: #080d1b;
                    color: #edf2ff;
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                }

                .container {
                    width: 100%;
                    max-width: 900px;
                }

                .header {
                    text-align: center;
                    margin-bottom: 45px;
                }

                .tag {
                    display: inline-block;
                    color: #75a7ff;
                    border: 1px solid #294b80;
                    background: #132344;
                    padding: 8px 17px;
                    border-radius: 30px;
                    font-size: 12px;
                    letter-spacing: 2px;
                    margin-bottom: 22px;
                }

                h1 {
                    font-size: clamp(30px, 6vw, 48px);
                    margin-bottom: 13px;
                    background: linear-gradient(90deg, #64a5ff, #b28aff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .subtitle {
                    color: #8492ad;
                    font-size: 15px;
                    line-height: 1.7;
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 22px;
                }

                .card {
                    background: #111a2e;
                    border: 1px solid #26334e;
                    border-radius: 18px;
                    padding: 27px;
                    transition: 0.3s;
                }

                .card:hover {
                    transform: translateY(-5px);
                    border-color: #648cff;
                }

                .number {
                    color: #8b9ab8;
                    font-size: 12px;
                    letter-spacing: 2px;
                    margin-bottom: 18px;
                }

                h2 {
                    font-size: 23px;
                    margin-bottom: 12px;
                }

                .description {
                    color: #8d9ab2;
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 23px;
                }

                .endpoint {
                    display: block;
                    background: #080f20;
                    border: 1px solid #293955;
                    border-radius: 9px;
                    padding: 13px;
                    color: #8db5ff;
                    font-family: monospace;
                    font-size: 13px;
                    text-decoration: none;
                    overflow-wrap: anywhere;
                    transition: 0.3s;
                }

                .endpoint:hover {
                    background: #192b4a;
                    border-color: #648cff;
                    color: #ffffff;
                }

                .result {
                    margin-top: 16px;
                    color: #72d9b0;
                    font-size: 14px;
                }

                .footer {
                    text-align: center;
                    margin-top: 35px;
                    color: #63718b;
                    font-size: 12px;
                    letter-spacing: 1px;
                }

                @media (max-width: 650px) {
                    .cards {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <main class="container">
                <header class="header">
                    <div class="tag">NODE.JS • HTTP SERVER</div>
                    <h1>URL PROCESSOR</h1>
                    <p class="subtitle">
                        Xử lý tham số URL và thực thi yêu cầu từ Web Server
                        <br>
                        Server đang hoạt động tại cổng 3001
                    </p>
                </header>

                <section class="cards">
                    <article class="card">
                        <div class="number">01 / GREETING</div>
                        <h2>Hello Endpoint</h2>
                        <p class="description">
                            Nhận tên người dùng từ URL và trả về lời chào tương ứng.
                        </p>
                        <a class="endpoint" href="/hello?name=Minh">
                            /hello?name=Minh ↗
                        </a>
                        <div class="result">Kết quả: Xin chào Minh</div>
                    </article>

                    <article class="card">
                        <div class="number">02 / CALCULATOR</div>
                        <h2>Sum Endpoint</h2>
                        <p class="description">
                            Nhận hai giá trị số từ URL và tính tổng tự động.
                        </p>
                        <a class="endpoint" href="/sum?a=10&b=20">
                            /sum?a=10&b=20 ↗
                        </a>
                        <div class="result">Kết quả: Tổng = 30</div>
                    </article>
                </section>

                <footer class="footer">
                    PERSONAL NODE.JS PROJECT — PORT 3001
                </footer>
            </main>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log('\n========================================');
    console.log('          URL PROCESSOR - SERVER');
    console.log('========================================');
    console.log('Server dang hoat dong tai:');
    console.log(`Trang chu:    http://localhost:${PORT}`);
    console.log(`Hello:        http://localhost:${PORT}/hello?name=Minh`);
    console.log(`Tinh tong:    http://localhost:${PORT}/sum?a=10&b=20`);
    console.log('========================================\n');
});
