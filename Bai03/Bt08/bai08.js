
const fs = require('fs');
const path = require('path');

const thuMuc = path.join(__dirname, 'data');
const tapTinCu = path.join(thuMuc, 'ghichu.txt');
const tapTinMoi = path.join(thuMuc, 'ghichu_moi.txt');
const tapTinTam = path.join(thuMuc, 'tam.txt');

console.log('\n===== QUAN LY TAP TIN - BAI 08 =====\n');

try {
    if (!fs.existsSync(thuMuc)) {
        fs.mkdirSync(thuMuc);
        console.log('[THANH CONG] Da tao thu muc data.');
    } else {
        console.log('[THONG BAO] Thu muc data da ton tai.');
    }

    const noiDung = [
        'Hom nay toi thuc hanh Node.js voi module File System.',
        'Toi da hoc cach tao, ghi va doc noi dung tap tin.',
        'Bai thuc hanh giup toi lam quen voi rename() va unlink().'
    ].join('\n');

    fs.writeFileSync(tapTinCu, noiDung, 'utf8');
    console.log('[THANH CONG] Da tao ghichu.txt va ghi 3 dong noi dung.');

    fs.renameSync(tapTinCu, tapTinMoi);
    console.log('[THANH CONG] Da doi ten ghichu.txt thanh ghichu_moi.txt.');

    const ketQua = fs.readFileSync(tapTinMoi, 'utf8');
    console.log('\n--- NOI DUNG TAP TIN SAU KHI DOI TEN ---');
    console.log(ketQua);

    fs.writeFileSync(tapTinTam, 'Day la tap tin tam duoc tao de kiem tra unlink().', 'utf8');
    console.log('\n[THANH CONG] Da tao tap tin tam.txt.');

    fs.unlinkSync(tapTinTam);
    console.log('[THANH CONG] Da xoa tap tin tam.txt bang fs.unlink().');

    console.log('\n===== HOAN THANH BAI THUC HANH =====');
    console.log('Tap tin ghichu_moi.txt van duoc luu trong thu muc data.\n');

} catch (error) {
    console.log('\n[LOI] Khong the thuc hien thao tac:', error.message);
}
