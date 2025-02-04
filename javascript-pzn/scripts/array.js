const names = []
names.push("Indra")
names.push("wan", "ismail", 19)
names.push("joko", "rudi", "rend")

console.table(names)

console.log(names[0])
console.log(names[1])
console.log(names[2])

names[0] = "programmer"
names[1] = "Zaman"
names[2] = "now"
console.table(names)

delete names[3]

console.table(names)

names[3] = "di ubah lagi"
names.push(1,2,3,4,5,6,7,8,9,10)
names.push(["Indra", "ismial", "rend"])

console.table(names)
