const person = {
    firstName: "Indra",
    lastName: "Ismail",
    get fullName (){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const array = value.split(" ")
        this.firstName = array[0]
        this.lastName = array[1]
    }
}



person.fullName = "Ridho Nugraha"
console.table(person)

person.fullName = "Joko Morro"
console.table(person)

person.fullName = "Eko Khennedy"
console.table(person)







