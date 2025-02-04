const sayHello = (name) => {
    const say = `Hello ${name}`
    console.info(say)
}

sayHello("Indra") 

//arrow function tanpa block 

// const sayHalo = (name) => console.info(`Halo ${name}`)
const sayHalo = name => console.info(`Halo ${name}`)

sayHalo("Indra")

// INI CARA BIASA MEMAKAI RETURN
// const sum = (first,second) => {
//     return first + second;
// }

const sum2 = (first, second) =>  first + second


console.info(sum2(100,100))

function giveMename(callback){
    callback("INDRA")
}

//anonymous version
// giveMename(function (name) {
//     console.info(`Hello ${name}`)
// })

//arrow function version
//tanpa parameter juga bisa
// giveMename((name) => console.info(`Hello ${name}`))
giveMename(name => console.info(`Hello ${name}`))