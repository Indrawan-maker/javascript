let person = {
    address: {
        country : "Kalimantan"
    }
}

let country = person?.address?.country

// if(person.addres !== undefined && person.addres !== null)  {
//     country = person.addres.country
// }

document.writeln(`<p>sukses</p>`)

document.writeln(`<p>${country}</p>`)

document.writeln(`<p>sukses</p>`)
