function evaluasiAsupanKalori(kalori) {
    let totalKalori = 0;
    let targetKalori = [];

    for (let i = 0; i < kalori.length; i++) {
        totalKalori += kalori[i];
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

const kalori = [220, 480, 350, 400, 950, 600]
const hasil = evaluasiAsupanKalori(kalori);
console.log (`Asupan kalori ${hasil.total}, ${hasil.target}`);