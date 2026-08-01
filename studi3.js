function filterParkirGanjilGenap(mobil) {
    for (let i = 0; i < mobil.length; i++) {
        let dataMobil = mobil[i];
        let angka = dataMobil.plat.match(/\d+/)[0];
        let angkaTerakhir = parseInt(angka.slice(-1));
        let platGenap = angkaTerakhir % 2 === 0;
        let tglGenap = dataMobil.tglMasuk % 2 === 0;
        let platGanjil = angkaTerakhir % 2 !== 0;
        let tglGanjil = dataMobil.tglMasuk % 2 !== 0;
        let status = '';
     if (platGenap && tglGenap) {
        status = 'Diizinkan';
    } else if (platGanjil && tglGanjil) {
        status = 'Diizinkan';
    } else {
        status = 'Tidak Diizinkan';
    }
    
    console.log (`Nama Mobil: ${dataMobil.nama}
Plat Mobil: ${dataMobil.plat}
Tanggal Masuk: ${dataMobil.tglMasuk}
Status: ${status}
`);
}
}

const mobil = [
{
    nama: 'Toyota Avanza',
    plat: 'DD 2637 GR',
    tglMasuk: 27
},
{
    nama: 'Daihatsu Ayla',
    plat: 'B 4578 VJ',
    tglMasuk: 25
},
{
    nama: 'Suzuki Ertiga',
    plat: 'DD 3579 FM',
    tglMasuk: 16
},
{
    nama: 'Toyota Fortuner',
    plat: 'L 3473 UB',
    tglMasuk: 21
},
{
    nama: 'Honda Civic',
    plat: 'DD 4784 ER',
    tglMasuk: 18
},
]

filterParkirGanjilGenap(mobil);