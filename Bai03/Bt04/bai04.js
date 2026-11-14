
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        // Danh sách sinh viên
        const danhSachSinhVien = [
            {
                masv: 'SV001',
                hoten: 'Nguyễn Minh Tuấn',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Trần Thị Mai',
                tuoi: 19,
                diem: 4.0
            },
            {
                masv: 'SV003',
                hoten: 'Phạm Quốc Bảo',
                tuoi: 21,
                diem: 6.5
            }
        ];

        // Thêm sinh viên vào MongoDB
        const ketQua = await collection.insertMany(danhSachSinhVien);
        console.log(`Đã thêm ${ketQua.insertedCount} sinh viên.`);

        // Tìm và hiển thị danh sách sinh viên
        console.log('\nDANH SÁCH SINH VIÊN:');

        const danhSach = await collection.find().toArray();

        console.log(danhSach);

    } catch (error) {
        console.error('Lỗi:', error.message);
    } finally {
        // Đóng kết nối MongoDB
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB.');
    }
}

main();
