// subtitusi template

const name = "Muhammad Indrawan Ismail"
const firstName = "Muhammad"
const middleName = "Indrawan"
const lastName = "Ismail"
const template = `name : ${firstName} ${middleName} ${lastName}`

console.log(template)


const nilai = 50
const template2 = `
name : ${name},
lulus : ${nilai > 70}
`
document.writeln(template2)

const multiline = `Nama saya Indra,
Sekarang belajar,
sering banget nulis kode, 
kalo mager paling belajar non mikir nambah info aj`
document.writeln("<pre>")
document.writeln(multiline)
document.writeln("</pre>")

