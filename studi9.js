function prosesLeaderboard(daftarPemain) {
    let hasilLeaderboard = [];
    for (let i = 0; i < daftarPemain.length; i++) {
        let pemain = daftarPemain[i];
        let tier = '';
        if (pemain.skor >= 900) {
            tier = 'Gold Tier';
        } else if (pemain.skor >= 700) {
            tier = 'Silver Tier';
        } else {
            tier = 'Bronze Tier';
        } hasilLeaderboard.push({
            nama: pemain.nama,
            skor: pemain.skor,
            tier: tier
        });
    } return hasilLeaderboard;
}

const daftarPemain = [
    {
        nama: 'Player 1',
        skor: 920
    },
    {
        nama: 'Player 2',
        skor: 850
    },
    {
        nama: 'Player 3',
        skor: 680
    },
    {
        nama: 'Player 4',
        skor: 710
    },
    {
        nama: 'Player 5',
        skor: 550
    }
];

const dataLeaderboard = prosesLeaderboard(daftarPemain);
console.log (dataLeaderboard)