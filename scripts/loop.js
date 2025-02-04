for( let counter = 1 ; counter <= 2 ;counter++){
    document.writeln(`<p>ini adalah perulangan ke ${counter}</p>`)
}

let asuna = 1
while(asuna <= 2) {
    document.writeln(`<p>ulang ke ${asuna}</p>`)
    asuna++
}

// do while
let kirito = 1
do {
    document.writeln(`<p>do perulang ke ${kirito}</p>`)
    kirito++
} while(kirito <= 2)

//break
let newbie = 1
while(true) {
    document.writeln(`<p>perulangan ke-${newbie}</p>`)
    newbie++
    if(newbie > 5) {
        break
    }
}

//continue
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        continue
    }
    document.writeln(`<p>perulangan ganjil ${i}</p>`)
}











