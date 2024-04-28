// array
const listMahasiswa = ["Haviz", "Ozi", "Arya", "Ratih", "Nabila", "❤", "Gatot"];
const [a, b, c, d, e, f,  ...rest] = listMahasiswa;

console.log(a, f, c);


// object
const dataDiri = {
    nama: "Indra",
    umur: 18,
    tanggalLahir: "12 January",
    sapa: function() {
        console.log(`Halo ${nama}`)
    }
};

const {nama, umur, tanggalLahir, sapa} = dataDiri;
console.log(umur)
sapa()