
function tinhTrungBinh(diemToan, diemLy, diemHoa) {
    let tongDiem = diemToan + diemLy + diemHoa;
    return tongDiem / 3;
}

function danhGiaHocLuc(diemTrungBinh) {
    let ketQua;

    if (diemTrungBinh >= 8) {
        ketQua = "Gioi";
    } else if (diemTrungBinh >= 6.5) {
        ketQua = "Kha";
    } else if (diemTrungBinh >= 5) {
        ketQua = "Trung binh";
    } else {
        ketQua = "Yeu";
    }

    return ketQua;
}

module.exports = {
    tinhTrungBinh,
    danhGiaHocLuc
};
