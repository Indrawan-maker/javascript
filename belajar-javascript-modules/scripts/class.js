export class Person  {
    constructor(name){
        this.name = name
    }

    sayHello(name){
        console.info(`data: Hello ${name} my name is ${this.name}`)
    }
}