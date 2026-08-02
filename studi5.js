function cekRestockGudang(daftarBarang, threshold) {
    let barangWajibRestock = [];
    for (let i = 0; i< daftarBarang.length; i++) {
        let barang = daftarBarang[i];
        if (barang.stok < threshold && barang.aktif == true) {
            barangWajibRestock.push(barang.nama);
        }
    } return barangWajibRestock
    };

const threshold = 10;
const daftarBarang = [
    {
        nama: 'Arduino Uno R3',
        stok: 5,
        aktif: true
    },
    {
        nama: 'NodeMCU ESP8266 Wi-Fi Module',
        stok: 19,
        aktif: true
    },
    {
        nama: 'Sensor Ultrasonic HC-SR04',
        stok: 8,
        aktif: true
    },
    {
        nama: 'Motor Servo MG996R',
        stok: 3,
        aktif: false
    },
    {
        nama: 'Raspberry Pi 5',
        stok: 2,
        aktif: true
    },
    {
        nama: 'Sensor Suhu & Kelembaban DHT22',
        stok: 15,
        aktif: true
    },
    {
        nama: 'Jumper Cable Male-to-Female',
        stok: 25,
        aktif: true
    },
    {
        nama: 'Lipo Battery 11.1V 2200mAh',
        stok: 4,
        aktif: true
    },
    {
        nama: 'Sensor MQ-2 Smoke Detector',
        stok: 6,
        aktif: false
    }
];

const hasilCek = cekRestockGudang(daftarBarang, threshold);

console.log (`Barang yang harus Restock: ${hasilCek}`);