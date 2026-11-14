class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV001", "Nguyễn Văn An", 20, 8.5),
    new SinhVien("SV002", "Trần Thị Bình", 19, 4.5),
    new SinhVien("SV003", "Lê Văn Cường", 21, 7.0),
    new SinhVien("SV004", "Phạm Thị Dung", 20, 5.0),
    new SinhVien("SV005", "Hoàng Văn Em", 22, 3.5)
];

const sinhVienDatYeuCau = danhSachSinhVien.filter(sv => sv.diem >= 5);

console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU:");
console.log(sinhVienDatYeuCau);