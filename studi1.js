function hitungTotalBuku(daftarHarga) {
    let totalHarga = 0;
    let status = '';
    for (let i = 0; i < daftarHarga.length; i++)
        totalHarga += daftarHarga[i];

 if (totalHarga > 150000) {
    let diskon = totalHarga * 0.15;
    totalHarga -= diskon;
    status = 'Mendapat diskon 15%';
} else {
    status = 'Tidak mendapat diskon';
}
return {
    totalAkhir: totalHarga,
    statusDiskon: status
}
}

const daftarHarga = [70000, 60000, 35000];
const hasilBelanja = hitungTotalBuku(daftarHarga);

console.log (`Total bayar: ${hasilBelanja.totalAkhir}
Status: ${hasilBelanja.statusDiskon}`);