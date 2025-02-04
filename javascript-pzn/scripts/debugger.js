// fitur debugger / mencari masalah
// ini dari browsernya sendiri


function createFullName(firstName, middleName, lastName){

    const fullName = `${firstName} ${lastName} ${lastName}`
    return fullName 
}

const name = createFullName("Eko", "Kurniawan", "Khennedy")
console.info(name)

function sum(...numbers){
    debugger
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total
}

console.info(sum(1 , 1 , 1 , 1 , 1 ))







// keismpulan
// dia akan memeriksa tiap breakpoint 
// pastikan inspect element terbuka saat ingin memeriksa breakpoint