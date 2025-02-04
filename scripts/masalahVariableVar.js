    // Global scope
    var i =20

    for (var i = 0; i < 10; i++) {
        // Lokal Scope
        console.info(`lokal ${i}`)
    }

    console.info(`Global ${i}`)

    // kesimpulan :
    // var tidak jelas antara global scope dan lokal scope
    // var yg ada di global scope bisa aja berubah oleh local scope
    // itu berbahaya dan itu sebabnya tidak terpakai lagi