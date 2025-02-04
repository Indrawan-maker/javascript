// operator logika di non bolean

console.info("Hello" || "")
console.info("" || [])
console.info( "0" || "NOL")
console.info( 0 || "NOL")
console.info( null || "NULL")
console.info( undefined || "UNDEFINED")
console.info( 0 || false)

const person = {
    firstName: "",
    lastName : "Ismail"
}

const name = person.firstName || person.lastName
console.info(name)

console.info("Hello" && "")
console.info("" && [])
console.info("0" && "NOL")
console.info(0 && "NOL")
console.info(null && "NULL")
console.info(undefined && "UNDEFINED")
console.info("null" && "UNDEFINED")














