let tanya = true
while (tanya == true ) {

    // menangkap pilihan player
    
    var player = prompt("Pilih Jari Anda: \n kelingking, telunjuk, jempol")
    
    //menangkap pilihan komputer
    // generate bilangan random
    var computer = Math.random()
    
    if (computer < 0.34) {
    computer = "kelingking"
} else if (computer >= 0.34 && computer < 0.67) {
    computer = "telunjuk"
} else {
    computer = "jempol"
}

var hasil = ''
//menentukan rules
if (player == computer) {
    hasil = "seri"
} else if (player == "jempol") {
    hasil = (computer == "telunjuk") ? "Anda Menang" : "Anda Kalah"
} else if (player == "telunjuk"){
    hasil = (computer == "jempol") ? "anda kalah" : "anda menaNG"
} else if (player == "kelingking") {
    hasil = (computer == "telunjuk") ? "anda kalah" : "anda menang"
} else {
    hasil = "silahkan pilih karakter yang sesuai"
}

// tampilkan hasil

alert(`terima kasih sudah memilih ${player} lawan anda ${computer} hasilnya adalah\n ${hasil}`)

tanya = confirm("lagi?")
}
alert ("terimakasih sudah bermain!")
