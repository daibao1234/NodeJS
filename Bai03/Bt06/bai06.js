
const xuLy = require("./xulyDiem");

// Bang mau giao dien
const mau = {
    reset: "\x1b[0m",
    dam: "\x1b[1m",
    cyan: "\x1b[36m",
    xanh: "\x1b[32m",
    vang: "\x1b[33m",
    do: "\x1b[31m",
    tim: "\x1b[35m",
    trang: "\x1b[37m"
};

// Danh sach sinh vien
let danhSach = [
    ["Nguyen Van Minh", 8, 9, 7],
    ["Tran Thi Hoa", 6, 7, 8],
    ["Pham Quoc Bao", 4, 5, 3]
];

// Ham tao duong vien
function taoVien() {
    console.log(
        mau.cyan +
        "+-----+------------------------+------------+------------------+" +
        mau.reset
    );
}

// Ham chon mau xep loai
function chonMau(loai) {
    if (loai === "Gioi") return mau.xanh;
    if (loai === "Kha") return mau.vang;
    if (loai === "Trung binh") return mau.cyan;
    return mau.do;
}

// Tieu de chuong trinh
console.log("\n");

console.log(
    mau.cyan + mau.dam +
    "       CHUONG TRINH QUAN LY KET QUA HOC TAP       " +
    mau.reset
);

console.log(
    mau.trang +
    "             BAI 06 - XAY DUNG MODULE              " +
    mau.reset
);

console.log(
    mau.tim +
    "          --------------------------------         " +
    mau.reset
);

console.log(
    mau.vang + mau.dam +
    "             DANH SACH KET QUA SINH VIEN           " +
    mau.reset
);

taoVien();

// Tieu de cac cot
console.log(
    mau.dam + mau.trang +
    "| STT | HO TEN                 | DIEM TB    | XEP LOAI         |" +
    mau.reset
);

taoVien();

// Bien thong ke
let tongGioi = 0;
let tongKha = 0;
let tongTrungBinh = 0;
let tongYeu = 0;

// Xu ly danh sach sinh vien
for (let i = 0; i < danhSach.length; i++) {
    let ten = danhSach[i][0];

    let diemTB = xuLy.tinhTrungBinh(
        danhSach[i][1],
        danhSach[i][2],
        danhSach[i][3]
    );

    let hocLuc = xuLy.danhGiaHocLuc(diemTB);

    // Thong ke xep loai
    if (hocLuc === "Gioi") {
        tongGioi++;
    } else if (hocLuc === "Kha") {
        tongKha++;
    } else if (hocLuc === "Trung binh") {
        tongTrungBinh++;
    } else {
        tongYeu++;
    }

    // Chon mau theo xep loai
    let stt = String(i + 1).padEnd(3);
    let hoTen = ten.padEnd(22);
    let diem = diemTB.toFixed(2).padEnd(10);
    let xepLoai = hocLuc.padEnd(16);

    // Hien thi ket qua
    console.log(
        "| " + mau.cyan + stt + mau.reset +
        "| " + hoTen +
        "| " + mau.vang + diem + mau.reset +
        "| " + chonMau(hocLuc) + xepLoai + mau.reset + "|"
    );
}

taoVien();

// Tong ket ket qua
console.log(
    "\n" + mau.tim + mau.dam +
    "                 TONG KET KET QUA                 " +
    mau.reset
);

console.log(mau.xanh + "  Gioi        : " + tongGioi + " sinh vien" + mau.reset);
console.log(mau.vang + "  Kha         : " + tongKha + " sinh vien" + mau.reset);
console.log(mau.cyan + "  Trung binh  : " + tongTrungBinh + " sinh vien" + mau.reset);
console.log(mau.do + "  Yeu         : " + tongYeu + " sinh vien" + mau.reset);

console.log(
    mau.cyan +
    "\n  Tong so sinh vien: " + danhSach.length +
    "\n  Chuong trinh da hoan thanh thanh cong!" +
    "\n  Thuc hien boi: CAO BAO DAI\n" +
    mau.reset
);
