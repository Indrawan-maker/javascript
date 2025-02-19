let tanya = true
while (tanya === true) {

    let p = parseInt(prompt("Tebak angka 1 - 10 bro"))
    
    let comp = Math.floor((Math.random()*9 - 10 + 1) + 10)
    
    
    let hasil = ""
    
    if(p === comp ){
        hasil = "Selamat anda berhasil menebak angkanya :)"
    }  else if (p < comp){
        hasil = "hahah angka anda masih terlalu kecil"
    } else if(p > comp){
        hasil = "hahah angka anda kelebihan"
    } else {
        hasil = "tolong masukan angka bro"
    }
    
    alert(`${hasil} ${p} ${comp}`)

    tanya = confirm("lanjut ga?")
}
alert("makasih bro udah nemenin gw")