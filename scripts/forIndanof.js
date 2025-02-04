const person = {
    firstName:"indra",
    middleName: "ismail",
    lastName: "one"
}

for (const property in person) {
    document.writeln(`<p>${property} : ${person[property]}</p>`)
}


//off
const names = ["indra", "ismail","one"]
for(const name of names) {
    document.writeln(`<p>${name}</p>`)
}

const fullName = "Muhammad Indrawan Ismail"
for(const character of fullName) {
    document.writeln(`<p>${character}</p>`)
}





