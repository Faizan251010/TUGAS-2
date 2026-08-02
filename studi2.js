function seleksiMahasiswa(daftarMahasiswa) {
    let seleksi = [];
    for (let i = 0; i < daftarMahasiswa.length; i++) {
        let mahasiswa = daftarMahasiswa[i];
        let hasilSeleksi = '';

        if (mahasiswa.ipk >= 3.5 && mahasiswa.pendapatanOrtu <= 5000000) {
            mahasiswa.hasilSeleksi = 'Lulus';
        } else {
            mahasiswa.hasilSeleksi = 'Tidak lulus';
        } seleksi.push({
            nama: mahasiswa.nama,
            ipk: mahasiswa.ipk,
            pendapatanOrtu: mahasiswa.pendapatanOrtu,
            hasil: mahasiswa.hasilSeleksi
        });
    } return seleksi;
}

const daftarMahasiswa = [
    {
        nama: 'Dede',
        ipk: 3.6,
        pendapatanOrtu: 2000000
    },
    {
        nama: 'Denis',
        ipk: 3.3,
        pendapatanOrtu: 4500000
    },
    {
        nama: 'Kappu',
        ipk: 3.5,
        pendapatanOrtu: 5000000
    },
    {
        nama: 'Goosey',
        ipk: 3.6,
        pendapatanOrtu: 6500000
    },
    {
        nama: 'Aiman',
        ipk: 3.8,
        pendapatanOrtu: 3000000
    },
]

const dataSeleksi = seleksiMahasiswa(daftarMahasiswa);
console.log (dataSeleksi);