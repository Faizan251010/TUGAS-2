function filterParkirGanjilGenap(mobil) {
    let hasilFilter = [];
    for (let i = 0; i < mobil.length; i++) {
        let dataMobil = mobil[i];
        let angka = dataMobil.plat;
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
    hasilFilter.push({
        nama: dataMobil.nama,
            plat: dataMobil.plat,
            tglMasuk: dataMobil.tglMasuk,
            status: status
    });
} return hasilFilter;
}

const mobil = [
{
    nama: 'Toyota Avanza',
    plat: '2637',
    tglMasuk: 27
},
{
    nama: 'Daihatsu Ayla',
    plat: '4578',
    tglMasuk: 25
},
{
    nama: 'Suzuki Ertiga',
    plat: '3579',
    tglMasuk: 16
},
{
    nama: 'Toyota Fortuner',
    plat: '3473',
    tglMasuk: 21
},
{
    nama: 'Honda Civic',
    plat: '4784',
    tglMasuk: 18
},
]

const dataParkir = filterParkirGanjilGenap(mobil);
console.log (dataParkir);