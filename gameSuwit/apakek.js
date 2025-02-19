let tanya = true;
while (tanya === true) {
    let p = parseInt(prompt("Tebak angka 1 - 10 bro"), 10);
    let comp = Math.floor(Math.random() * 10) + 1;
    let hasil = (comp === p) ? "Selamat! Tebakanmu benar." : "Salah, coba lagi!";
    alert(`${hasil} Tebakanmu: ${p}, Jawaban: ${comp}`);
    tanya = confirm("Lanjut ga?");
}
alert("Makasih bro udah nemenin gw");
