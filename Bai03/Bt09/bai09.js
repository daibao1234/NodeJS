
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();

        const db = client.db('qlsinhvien');
        const students = db.collection('students_test');

        console.clear();

        const line = '═'.repeat(76);
        const thinLine = '─'.repeat(76);

        console.log('\x1b[36m' + line + '\x1b[0m');
        console.log('\x1b[1m\x1b[36m                 QUAN LY SINH VIEN | NODE.JS\x1b[0m');
        console.log('\x1b[90m                         BAI THUC HANH SO 09\x1b[0m');
        console.log('\x1b[36m' + line + '\x1b[0m');

        console.log('\n  \x1b[32m●\x1b[0m Ket noi MongoDB thanh cong');
        console.log('  Database  : qlsinhvien');
        console.log('  Collection: students_test');

        const duLieu = [
            { masv: 'CDCNTT18B001', hoten: 'Nguyen Minh Khang', tuoi: 20, diem: 7.5 },
            { masv: 'CDCNTT18B002', hoten: 'Tran Gia Han', tuoi: 19, diem: 8.2 },
            { masv: 'CDCNTT18B003', hoten: 'Le Quoc Bao', tuoi: 21, diem: 4.3 },
            { masv: 'CDCNTT18B004', hoten: 'Pham Ngoc Anh', tuoi: 20, diem: 6.8 },
            { masv: 'CDCNTT18B005', hoten: 'Vo Thanh Dat', tuoi: 22, diem: 3.7 },
            { masv: 'CDCNTT18B006', hoten: 'Hoang Thu Trang', tuoi: 19, diem: 9.0 }
        ];

        const maSinhVien = duLieu.map(sv => sv.masv);

        await students.deleteMany({
            masv: { $in: maSinhVien }
        });

        const themMoi = await students.insertMany(duLieu);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  01. THEM DU LIEU SINH VIEN\x1b[0m');
        console.log(thinLine);
        console.log(`  Da them thanh cong: \x1b[32m${themMoi.insertedCount} sinh vien\x1b[0m`);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  02. XOA SINH VIEN THEO MA\x1b[0m');
        console.log(thinLine);

        const xoaMot = await students.deleteOne({
            masv: 'CDCNTT18B002'
        });

        console.log('  Ma sinh vien : CDCNTT18B002');
        console.log(`  Ket qua      : ${xoaMot.deletedCount === 1 ? '\x1b[32mDa xoa thanh cong\x1b[0m' : '\x1b[33mKhong tim thay\x1b[0m'}`);
        console.log(`  So ban ghi   : ${xoaMot.deletedCount}`);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  03. XOA SINH VIEN CO DIEM DUOI 5\x1b[0m');
        console.log(thinLine);

        const xoaNhieu = await students.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('  Dieu kien    : Diem < 5');
        console.log(`  So ban ghi   : ${xoaNhieu.deletedCount}`);
        console.log(`  Ket qua      : \x1b[32mDa xu ly thanh cong\x1b[0m`);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  04. DANH SACH SINH VIEN CON LAI\x1b[0m');
        console.log(thinLine);

        const danhSach = await students.find({})
            .sort({ masv: 1 })
            .toArray();

        console.log(
            '\n  ' +
            'STT'.padEnd(6) +
            'MA SINH VIEN'.padEnd(19) +
            'HO VA TEN'.padEnd(25) +
            'TUOI'.padEnd(8) +
            'DIEM'
        );

        console.log('  ' + '─'.repeat(69));

        danhSach.forEach((sv, index) => {
            console.log(
                '  ' +
                String(index + 1).padEnd(6) +
                sv.masv.padEnd(19) +
                sv.hoten.padEnd(25) +
                String(sv.tuoi).padEnd(8) +
                String(sv.diem)
            );
        });

        console.log('\n' + '\x1b[36m' + line + '\x1b[0m');
        console.log('\x1b[1m                   TONG KET KET QUA\x1b[0m');
        console.log('\x1b[36m' + line + '\x1b[0m');

        console.log(`  Tong so ban ghi da them : ${themMoi.insertedCount}`);
        console.log(`  Xoa theo ma sinh vien   : ${xoaMot.deletedCount}`);
        console.log(`  Xoa theo dieu kien diem : ${xoaNhieu.deletedCount}`);
        console.log(`  So sinh vien con lai    : \x1b[32m${danhSach.length}\x1b[0m`);

        console.log('\x1b[36m' + line + '\x1b[0m\n');

    } catch (error) {
        console.error('\n\x1b[31m  LOI: ' + error.message + '\x1b[0m\n');
    } finally {
        await client.close();
    }
}

main();
