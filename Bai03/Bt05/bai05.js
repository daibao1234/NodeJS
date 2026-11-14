
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

        // Tìm sinh viên có điểm từ 7 trở lên
        console.log('\nDANH SÁCH SINH VIÊN CÓ ĐIỂM TỪ 7 TRỞ LÊN:');

        const danhSach = await collection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log(danhSach);

        // Cập nhật điểm sinh viên theo mã sinh viên
        console.log('\nCẬP NHẬT ĐIỂM SINH VIÊN SV002:');

        const ketQua = await collection.updateOne(
            { masv: 'SV002' },
            { $set: { diem: 7.5 } }
        );

        if (ketQua.matchedCount > 0) {
            console.log('Cập nhật điểm thành công!');
        } else {
            console.log('Không tìm thấy sinh viên SV002.');
        }

        // Hiển thị thông tin sau khi cập nhật
        console.log('\nTHÔNG TIN SINH VIÊN SAU CẬP NHẬT:');

        const sinhVien = await collection.findOne({
            masv: 'SV002'
        });

        console.log(sinhVien);

    } catch (error) {
        console.error('Lỗi:', error.message);
    } finally {
        // Đóng kết nối MongoDB
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB.');
    }
}

main();
