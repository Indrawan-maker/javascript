// function generator '*'
function* createNames() {
    yield "Muhammad"
    yield "Indrawan"
    yield "Ismail"
}

const names = createNames()
for (const name of names) {
    console.info(name)
}
// lazy (malas)
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1) {
            console.info(`Yield ${i}`)
            yield i
        }
    }
}
// eager (ingin sekali )
function buatGanjilArray(value) {
    const result = []
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1) {
            console.info(`Yield ${i}`)
            result.push(i);
        }
    }
    return result
}
const numbers = buatGanjil(100)
// for (const number of numbers) {
//      console.info (number)
// }
console.info(numbers.next().value)
console.info(numbers.next().value)
console.info(numbers.next().value)