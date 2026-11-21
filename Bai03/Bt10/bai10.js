
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();

        const db = client.db('qlsinhvien');
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        console.clear();

        const line = '═'.repeat(82);
        const thinLine = '─'.repeat(82);

        console.log('\x1b[36m' + line + '\x1b[0m');
        console.log('\x1b[1m\x1b[36m               LIEN KET DU LIEU SINH VIEN - KHOA\x1b[0m');
        console.log('\x1b[90m                         BAI THUC HANH SO 10\x1b[0m');
        console.log('\x1b[36m' + line + '\x1b[0m');

        console.log('\n  \x1b[32m●\x1b[0m Ket noi MongoDB thanh cong');
        console.log('  Database: qlsinhvien');

        const duLieuKhoa = [
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'DTVT', tenkhoa: 'Dien - Dien tu' }
        ];

        const duLieuSinhVien = [
            { masv: 'CDCNTT18B001', hoten: 'Nguyen Minh Khang', makhoa: 'CNTT' },
            { masv: 'CDCNTT18B002', hoten: 'Tran Gia Han', makhoa: 'CNTT' },
            { masv: 'CDCNTT18B003', hoten: 'Le Quoc Bao', makhoa: 'DTVT' },
            { masv: 'CDCNTT18B004', hoten: 'Pham Ngoc Anh', makhoa: 'CNTT' },
            { masv: 'CDCNTT18B005', hoten: 'Vo Thanh Dat', makhoa: 'DTVT' },
            { masv: 'CDCNTT18B006', hoten: 'Hoang Thu Trang', makhoa: 'DTVT' }
        ];

        await departments.deleteMany({
            makhoa: { $in: duLieuKhoa.map(khoa => khoa.makhoa) }
        });

        await students.deleteMany({
            masv: { $in: duLieuSinhVien.map(sv => sv.masv) }
        });

        const themKhoa = await departments.insertMany(duLieuKhoa);
        const themSinhVien = await students.insertMany(duLieuSinhVien);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  01. TAO DU LIEU CAC KHOA\x1b[0m');
        console.log(thinLine);

        duLieuKhoa.forEach((khoa, index) => {
            console.log(`  ${index + 1}. ${khoa.makhoa.padEnd(8)} ${khoa.tenkhoa}`);
        });

        console.log(`\n  \x1b[32mDa them ${themKhoa.insertedCount} khoa thanh cong.\x1b[0m`);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  02. THEM DU LIEU SINH VIEN\x1b[0m');
        console.log(thinLine);
        console.log(`  \x1b[32mDa them ${themSinhVien.insertedCount} sinh vien thanh cong.\x1b[0m`);

        console.log('\n' + thinLine);
        console.log('\x1b[1m  03. LIEN KET HAI COLLECTION BANG $LOOKUP\x1b[0m');
        console.log(thinLine);

        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            },
            {
                $sort: { masv: 1 }
            }
        ]).toArray();

        console.log('  Da thuc hien aggregate() ket hop $lookup thanh cong.');

        console.log('\n' + thinLine);
        console.log('\x1b[1m  04. DANH SACH SINH VIEN KEM TEN KHOA\x1b[0m');
        console.log(thinLine);

        console.log(
            '\n  ' +
            'STT'.padEnd(6) +
            'MA SINH VIEN'.padEnd(19) +
            'HO VA TEN'.padEnd(25) +
            'MA KHOA'.padEnd(12) +
            'TEN KHOA'
        );

        console.log('  ' + '─'.repeat(80));

        ketQua.forEach((sv, index) => {
            console.log(
                '  ' +
                String(index + 1).padEnd(6) +
                sv.masv.padEnd(19) +
                sv.hoten.padEnd(25) +
                sv.makhoa.padEnd(12) +
                sv.tenkhoa
            );
        });

        console.log('\n' + '\x1b[36m' + line + '\x1b[0m');
        console.log('\x1b[1m                    TONG KET KET QUA\x1b[0m');
        console.log('\x1b[36m' + line + '\x1b[0m');

        console.log(`  So khoa da them          : ${themKhoa.insertedCount}`);
        console.log(`  So sinh vien da them     : ${themSinhVien.insertedCount}`);
        console.log(`  So sinh vien lien ket    : \x1b[32m${ketQua.length}\x1b[0m`);
        console.log('  Trang thai lien ket      : \x1b[32mThanh cong\x1b[0m');

        console.log('\x1b[36m' + line + '\x1b[0m\n');

    } catch (error) {
        console.error('\n\x1b[31m  LOI: ' + error.message + '\x1b[0m\n');
    } finally {
        await client.close();
    }
}

main();
