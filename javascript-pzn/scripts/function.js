function sayHelloWorld() {
    document.writeln(`<p>Hello world</p>`)
}

sayHelloWorld()

//function parameter
function sayHello (firstName, lastName) {
    document.writeln(`nama : ${firstName}</br>umur : ${lastName}</br>`)
}

sayHello("indra", 19)
sayHello("ridho", 18)


// function return value

function sayHelo(firstName, lastName) {
    const say = `hello ${firstName} ${lastName}`
    return say
}

const result = sayHelo("Indra", "Ismail")
document.writeln(`${result}`)

// function return value lebih dari satu

function getFinalValue(value) {
    if(value > 90) {
        return "A"
    } else if (value > 80) {
        return "B"
    } else if (value > 70) {
        return "C"
    } else if (value > 60) {
        return "D"
    } else {
        return "Anda tidak lulus"
    }
}

const finalValue = getFinalValue(55)
document.writeln(`<p>berikut nilai anda : ${finalValue}</p>`)

isContains = (array, searchValue) => {
    for (const element of array) {
        console.info(`Iterasi Element ${element}`)
        if(element === searchValue) {
            return true
        }
    }
    return false
}

const array = [10,20,30,40,50,60,70,80,90,100]
const search = 50
const found = isContains(array, search)
document.writeln(`<p>${found}</p>`)

//optional parameter

function sayHello(firstName, middleName, lastName) {
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}

sayHello()
sayHello("indra")
sayHello("indra","ismail")
sayHello("indra","ismail", "muhammad", "budi")

// default parameter

function register(name, gender = "UNKNOWN") {
    console.log(name)
    console.log(gender)
}

register()
register("indra")
register("indra", "male")
register("indra", undefined)

// rest parameter

function sum(name, age, ...data) {
    let total = 0
    for (const item of data) {
        total += item
    }
    document.writeln(`nama : ${name} </br>umur : ${age}</br> pemberhentian berikutnya : ${total} </br>`)
}

sum("Indra", 19, 10, 5, 99)
sum("rend", 19, 10, 5, 44)
sum("Ismail", 19, 10, 5, 88)

const values = [10,10,10,10,20,30]
// spread syntax ... mengirim ke rest parameter
sum("test", ...values)

function oldSum(){
    let totak = 0
    for (const argument of arguments)
        totak += argument
    document.writeln(`<p>total is : ${totak}</p>`)
}


oldSum(1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,77,7,77,7,7,7,77,7,7)

// menjadikan function value
function sayHalo(name) {
    document.writeln(`<p>halo, ${name}</p>`)
}

sayHalo("Indra")

const say = sayHalo

say("budri")


// function sebagai parameter
function giveMeName(callBack) {
    callBack("Indra") // sayHalo Indra
}

giveMeName(sayHalo)
giveMeName(say) // giveMeName(sayHalo)

// anonymous function
// ke variabel
const sayy = function(name) {
    document.writeln(`<p>Haloo , ${name}</p>`)
}

sayy("Indrawan")
sayy("Indrawakkk")

// ke parameter
function giveMeNama(callBack) {
    callBack("Indra?")
}

giveMeNama(sayy)

giveMeNama(function(name){
    document.writeln(`<p>hai, ${name}</p>`)
})

// function dalam function
function outer() {
    function inner() {
        console.info("inner")
    }
    inner()
    inner()
}

outer()
inner()


























