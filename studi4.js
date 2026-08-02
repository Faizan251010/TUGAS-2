function evaluasiAsupanKalori(kalori) {
    let totalKalori = 0;
    let target = '';

    for (let i = 0; i < kalori.length; i++) {
        totalKalori += kalori[i];
    } if (totalKalori == 3000) {
        target = 'Kalori sudah Pas';
    } else if (totalKalori > 3000) {
        target = 'Kalori lebih dari target, kurangi kalori';
    } else {
        target = 'Kalori kurang dari target, tambah kalori';
    }
    console.log (`Asupan kalori ${totalKalori} kalori ${target}`)
}

const kalori = [220, 480, 350, 400, 950, 600]
evaluasiAsupanKalori(kalori);