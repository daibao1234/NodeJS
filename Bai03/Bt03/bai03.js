const fs = require('fs');

// Thông tin sinh viên
const hoTen = 'Cao Bảo Đại';
const maSV = 'SV001';
const lop = 'CDCNTT18B';

// Nội dung ban đầu của tập tin
const noiDung = `Họ và tên: ${hoTen}\nMã sinh viên: ${maSV}\n`;

// Tạo tập tin thongtin.txt
fs.writeFile('thongtin.txt', noiDung, 'utf8', (err) => {
    if (err) {
        console.log('Lỗi khi tạo tập tin:', err);
        return;
    }

    console.log('Đã tạo tập tin thongtin.txt');

    // Đọc nội dung tập tin lần đầu
    fs.readFile('thongtin.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Lỗi khi đọc tập tin:', err);
            return;
        }

        console.log('\nNội dung ban đầu:');
        console.log(data);

        // Ghi nối thêm tên lớp vào cuối tập tin
        fs.appendFile('thongtin.txt', `Tên lớp: ${lop}\n`, 'utf8', (err) => {
            if (err) {
                console.log('Lỗi khi ghi nối tập tin:', err);
                return;
            }

            console.log('Đã ghi nối thêm tên lớp vào tập tin.');

            // Đọc lại tập tin sau khi cập nhật
            fs.readFile('thongtin.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log('Lỗi khi đọc lại tập tin:', err);
                    return;
                }

                console.log('\nNội dung sau khi cập nhật:');
                console.log(data);
            });
        });
    });
});