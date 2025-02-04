// didalam object kita bisa menambahkan function

//cara 1
// function sayHello(name){
//     alert(`Helloo ${name}`)
// }

// const person ={
//     name:"Indra",
//     sayHello: sayHello
// }

// person.sayHello('Indra')

//menambahkan method ke object
//cara 2 
const person = {
    name: "Indra",
}

person.sayHello = function (name){
    alert(`Hello ${name}`)
}

person.sayHello('abdoll')

























