const person = {};

//ubah property or / atribut
person["nama"] = "Indrawan Ismail";
person["alamat"] = "KALTIM"
person["umur"] = 19

console.table(person)

delete person["alamat"]
console.table(person)

const siswa = {
    namaLengkap : "Indrawan Ismail",
    alamat : "Tenggarong seberang",
    umur : 19
}

console.table(siswa)

console.info((`Nama : ${siswa.namaLengkap}`))
console.info((`Alamat : ${siswa.alamat}`))
console.info((`Umur : ${siswa.umur}`))