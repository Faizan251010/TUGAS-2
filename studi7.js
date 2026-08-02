function filterRestoranFavorit(daftarRestoran) {
    let restoFavorit = [];
    for (let i = 0; i < daftarRestoran.length; i++) {
        let dataResto = daftarRestoran[i];
     if (dataResto.rating >= 4.5 && dataResto.buka == true) {
        restoFavorit.push(dataResto.nama);
    }
} return restoFavorit;
}

const daftarRestoran = [
    {
        nama: 'Puding coklat Pak Hambali',
        rating: 4.7,
        buka: true
    },
    {
        nama: 'Bakpao coklat maknyos',
        rating: 4.3,
        buka: true
    },
    {
        nama: 'Jagung coklat khas Madiun',
        rating: 4.6,
        buka: false
    },
    {
        nama: 'Ayam goreng Mas Rusdi',
        rating: 4.5,
        buka: true
    },
    {
        nama: 'Rumah makan Mas Amba',
        rating: 4.1,
        buka: false
    }
]; 

console.log (`Restoran Favorit: ${filterRestoranFavorit(daftarRestoran)}`)