function kelompokkanAntreanPasien(daftarPasien) {
    let hasilKelompok = [];
    for (let i = 0; i < daftarPasien.length; i++) {
        let pasien = daftarPasien[i];
        let kategori = '';
        if (pasien.usia >= 60) {
            kategori = 'Prioritas Lansia';
        } else {
            kategori = 'Antrean Reguler';
        } hasilKelompok.push({
            nama: pasien.nama,
            usia: pasien.usia,
            kategori: kategori
        });
    } return hasilKelompok
}

const daftarPasien = [
    {
        nama: 'Siti Rahma',
        usia: 68
    },
    {
        nama: 'Rian Hidayat',
        usia: 24
    },
    {
        nama: 'Gatot Subroto',
        usia: 60
    },
    {
        nama: 'Amelia Putri',
        usia: 45
    },
    {
        nama: 'Dede',
        usia: 73
    }
];

const dataKelompok = kelompokkanAntreanPasien(daftarPasien);
console.log (dataKelompok);