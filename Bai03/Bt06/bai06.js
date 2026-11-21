
const xuLy = require("./xulyDiem");


const mau = {
    reset: "\x1b[0m",
    xanh: "\x1b[32m",
    vang: "\x1b[33m",
    xanhDuong: "\x1b[36m",
    dam: "\x1b[1m",
    do: "\x1b[31m"
};

// Danh sach thong tin sinh vien va diem 3 mon
let danhSach = [
    ["Nguyen Van Minh", 8, 9, 7],
    ["Tran Thi Hoa", 6, 7, 8],
    ["Pham Quoc Bao", 4, 5, 3]
];


console.log(
    mau.xanhDuong +
    "\n============== KET QUA HOC TAP ==============" +
    mau.reset
);

console.log(
    mau.dam +
    "STT".padEnd(6) +
    "HO TEN".padEnd(25) +
    "DIEM TB".padEnd(12) +
    "XEP LOAI" +
    mau.reset
);

console.log("------------------------------------------------");

// Tinh diem va xep loai tung sinh vien
for (let i = 0; i < danhSach.length; i++) {
    let ten = danhSach[i][0];

    let diemTB = xuLy.tinhTrungBinh(
        danhSach[i][1],
        danhSach[i][2],
        danhSach[i][3]
    );

    let hocLuc = xuLy.danhGiaHocLuc(diemTB);

    let mauXepLoai;

    if (hocLuc === "Gioi") {
        mauXepLoai = mau.xanh;
    } else if (hocLuc === "Kha") {
        mauXepLoai = mau.vang;
    } else if (hocLuc === "Trung binh") {
        mauXepLoai = mau.xanhDuong;
    } else {
        mauXepLoai = mau.do;
    }

    // Hien thi ket qua
    console.log(
        mau.xanhDuong + String(i + 1).padEnd(6) + mau.reset +
        ten.padEnd(25) +
        diemTB.toFixed(2).padEnd(12) +
        mauXepLoai + hocLuc + mau.reset
    );
}

console.log(
    mau.xanhDuong +
    "================================================\n" +
    mau.reset
);
