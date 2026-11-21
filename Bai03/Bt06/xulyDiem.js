
function tinhTrungBinh(diemToan, diemLy, diemHoa) {
    return (diemToan + diemLy + diemHoa) / 3;
}

function danhGiaHocLuc(diemTrungBinh) {
    if (diemTrungBinh >= 8) {
        return "Gioi";
    } else if (diemTrungBinh >= 6.5) {
        return "Kha";
    } else if (diemTrungBinh >= 5) {
        return "Trung binh";
    } else {
        return "Yeu";
    }
}

// Xuat cac ham ra module
module.exports = {
    tinhTrungBinh,
    danhGiaHocLuc
};
