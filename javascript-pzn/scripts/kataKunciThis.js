console.info(this)

function sample(){
    console.info(this)

    function inner(){
        console.info(this)
    }
    inner()
}

sample()


const person = {
    name: 'Indra', 
    sayHello: function (value){
        console.info(`Hello ${value} My name is ${this.name}`)
    }
}

person.sayHello(`Indera`)
person.sayHello(`Ceking`)