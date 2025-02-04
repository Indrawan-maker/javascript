//operator ternary

const nilai = 1
let ucapan

if(nilai >= 75) {
    ucapan = "Selamat anda lulus"
} else {
    ucapan = "you're doing a got job but not enaugh to lulus"
}

document.writeln(`<p>${ucapan}</p>`)

ucapan = nilai >= 75 ? "Selamat anda lulus" : "good job but that not enaugh to lulus"
document.writeln(`<p>${ucapan}</p>`)