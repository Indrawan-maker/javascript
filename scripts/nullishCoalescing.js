//operator nullish coalescing

let parameter = undefined

let data =  parameter;
if(data === undefined || data == null) {
    data = "nilai default"
}

document.writeln(`<p>${data}</p>`)


data =  parameter ?? "nilai default";
if(data === undefined || data == null) {
    data = "nilai default"
}

document.writeln(`<p>${data}</p>`)