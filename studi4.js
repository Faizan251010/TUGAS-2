function evaluasiAsupanKalori(daftarKalori) {
    let totalKalori = 0;
    let targetKalori = [];

    for (let i = 0; i < daftarKalori.length; i++) {
        totalKalori += daftarKalori[i];
    } if (totalKalori == 3000) {
        targetKalori = 'Kalori sudah Pas';
    } else if (totalKalori > 3000) {
        targetKalori = 'Kalori lebih dari target, kurangi kalori';
    } else {
        targetKalori = 'Kalori kurang dari target, tambah kalori';
    } return {
    total: totalKalori,
    target: targetKalori
    };
} 

const daftarKalori = [220, 480, 350, 400, 950, 600]
const hasil = evaluasiAsupanKalori(daftarKalori);
console.log (`Asupan kalori ${hasil.total}, ${hasil.target}`);