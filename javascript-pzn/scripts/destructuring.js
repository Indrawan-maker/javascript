// mengambil dan emngubah data dari array dan 
//membuatnya ke variable yg kita innginkan

{
    let names = ["Indra", "wawan", "Joko", "Jahri", "Rehan", "Fadil"]
    let [firstNames, middleNames, lastNames, ...others] = names
    
    console.info(firstNames)
    console.info(middleNames)
    console.info(lastNames)
    console.info(others)

}

{
    const person = {
        firstName: "Indrawan",
        lastName: "Ismail",
        addres : {
            street : "Jalan CiptoMangunkusumo",
            city : "Jakarta",
            country : "Indonesia"
        }, 
        hobby : "Membaca",
        channel : "Programmer Zaman Now"
    }
    // Ini Cara Bikin Lama
    // const firstnamess = person.firstName
    // Ini cara Cepat
    let {firstName, lastName, addres:{country, city, street}, ...others} = person
    console.info(firstName)
    console.info(lastName)
    console.info(country)
    console.info(others)
}

