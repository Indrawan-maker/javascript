// destructuring bisa di lakukan di function parameter
//tidak hanya di objek dan variabel
// ini membuat kita jadi mudah ketika ingin mengambil nested data
// dalam array maupun objek


// destructuring di function parameter (onjek)
{
    function displayPerson({firstName, middleName, lastName}){
        console.info(firstName)
        console.info(middleName)
        console.info(lastName)
    }
    
    const person = {
        firstName: "Indra",
        middleName: "Wan",
        lastName: "Ismail"
    }
    
    displayPerson(person)
}

// ini adalah destructuring terhadap array
{
    function sum([first, second]) {
        return first + second
    }
    
    console.info(sum([1,1]))
    console.info(sum([10,10]))
}

// kita bisa menambahkan default value  di desturcturing
// jika ada valuenya otomatis dia akan mengambil value asalnya
//default vaLUE DI ARRAY
{
    const names = ["Indra", "Budi", "Ridho"]
    const [firstName, middleName = "Wan", lastName = "Ismail"] = names

    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}

{
    //default value
    // ini cara destructuring di objek
    const person = {
        firstName: "Indrawan",
        middleName: "ini yang asli",
        lastName: "Ismail",
        addres : {
            street : "Jalan CiptoMangunkusumo",
            city : "Jakarta",
            country : "Indonesia"
        }, 
        hobby : "Membaca",
        channel : "Programmer Zaman Now"
    }
    let {firstName,middleName = "Indrawan V 0.2", lastName} = person
    console.info(firstName)
    console.info(lastName)
    console.info(middleName)
}



// kita juga bisa menambahkan variabel ke destructuring
// dan juga tetap menggunakan default valuenya
{
    const person = {
        firstName: "eko",
        middleName: "budi",
        lastName: "kenndedy"
    }
    
    let {firstName: namaDepan,
        middleName: namaTengah = "Indrawan",
        lastName: namaBelakang} = person
    console.info(namaDepan)
    console.info(namaTengah)
    console.info(namaBelakang)
}






