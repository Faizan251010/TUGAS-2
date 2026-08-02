function hitungGajiMingguan(jamKerja) {
    const gajiDasar = 50000;
    const gajiLembur = 75000;
    let totalJamKerja = 0;
    let totalGaji = 0;

    for (let i = 0; i < jamKerja.length; i++) {
        totalJamKerja += jamKerja[i];
    }

    if (totalJamKerja > 40) {
        let jamLembur = totalJamKerja - 40;
        totalGaji = (gajiDasar * 40) + (gajiLembur * jamLembur)
    } else {
        totalGaji = totalJamKerja * gajiDasar
    }
    return totalGaji;
}

const jamKerja = [10 ,9 ,8 ,10 ,8]
console.log(`Total gaji mingguan: Rp ${hitungGajiMingguan(jamKerja)}`);