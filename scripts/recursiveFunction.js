// memnaggil function dirinya sendiri

function factorial(value) {
    let result = 1
    for (let i = 1; i <= value ; i++) {
        result *= i
    }
    return result
}

console.info(factorial(10))
console.info(1 * 2 * 3 * 4 * 5 * 6* 7)


function factorialRecursive(value) {
    if(value === 10) {
        return 10
    } else {
        return value * factorialRecursive(value + 1)
    }
}

console.log(factorialRecursive(1))

// 5 * factorial recursive 4
