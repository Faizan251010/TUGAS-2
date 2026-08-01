function hitungTotalBuku(daftarHarga) {
    let totalHarga = 0;
    let status = "";
    for (let i = 0; i < daftarHarga.length; i++)
        totalHarga += daftarHarga[i];

 if (totalHarga > 150000) {
    let diskon = totalHarga * 0.15;
    totalHarga -= diskon;
    console.log (`Total bayar: ${totalHarga}
Status : Mendapat diskon 15%`);
} else {
    console.log (`Total bayar: ${totalHarga}
Status : Tidak mendapat diskon`);
}
}

const daftarHarga = [70000, 60000, 35000];
hitungTotalBuku(daftarHarga);