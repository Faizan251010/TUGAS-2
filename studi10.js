function validasiDaftarEmail(daftarEmail) {
    let emailValid = [];
    let emailInvalid = [];
    for (let i = 0; i < daftarEmail.length; i++) {
        if (daftarEmail[i].includes('@') && daftarEmail[i].includes('.')) {
            emailValid.push(daftarEmail[i]);
        } else {
            emailInvalid.push(daftarEmail[i]);
        }
    } return {
        valid: emailValid,
        invalid: emailInvalid
    };
}

const daftarEmail = [
    "budi.santoso@gmail.com",
    "dede_ganteng@yahoo",
    "kappu_gaming.com",
    "rusdi.irawan@outlook.co.id",
    "amba_coklat@gmail."
];

const hasil = validasiDaftarEmail(daftarEmail);
console.log (hasil);
