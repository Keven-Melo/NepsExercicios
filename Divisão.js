// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseFloat(input.split("\n")[0])
let B = parseFloat(input.split("\n")[1])

let divisao = A/B 

console.log(divisao.toFixed(2))