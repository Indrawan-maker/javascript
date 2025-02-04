const value1 = parseInt("1")
const value2 = 1
const sum = value1 + value2

document.writeln(`<p>${sum}</p>`)

document.writeln(`<p>${parseInt("1.1")}</p>`)
document.writeln(`<p>${parseFloat("1.1")}</p>`)
document.writeln(`<p>${Number("1.1")}</p>`)

const a = 1
const b = 1
const sum2 = a.toString() + b.toString()

document.writeln(`<p>${sum2}</p>`)

document.writeln(`<p>${parseInt("1salah")}</p>`)
document.writeln(`<p>${parseFloat("1.1a")}</p>`)

document.writeln(`<p>${Number("1salah")}</p>`)
document.writeln(`<p>${Number("1.1a")}</p>`)
document.writeln(`<p>${Number("a")}</p>`)

const first = Number("salah")
const second = first + 100

document.writeln(`<p>${isNaN(NaN)}</p>`)