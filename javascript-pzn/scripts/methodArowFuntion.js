// method arrow function ini memiliki batas 
// dia tidak bisa menggunakan fitur seperti this dan beberapa fitur lainnya 
//fitur fitur yang tidak bisa diakses :
// data generator, kata kunci this, argument object
const person = {
    name: "Indra",
    sayHello: (name) => {
        console.info(this)
        console.info(`Hello ${name}, my Name is ${this.name}`)
    }
}

person.sayHello("Budi")












