// let counter = 0 //global scope

// // global scope
// function hitMe() {
//     // local scope hitMe
//     counter++ //we can acces
// }

// hitMe()
// hitMe()

// console.info(counter)

// function first() {
//     // scope local first
//     let firstVariable = "first"
// }

// function second() {
//     // scope local second
//     let secondVariable = "second"
//     // console.log(firstVariable)//error
// }

// first()
// second()

// console.log(firstVariable)//error
// console.log(secondVariale)//error



function firstNest() {
    let firstVariabl = "FIRST! DA!" 

    function firstNested(){
        console.log(firstVariabl)
        const firstNestedVariable = "anu na"
    }
    firstNested()
    console.log(firstNestedVariable)
}

firstNest()