// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

const [A, B] = input.split(' ').map(parseFloat);

// Calcular a média
const media = (A + B) / 2;

if (media >= 7.0) {
    console.log("Aprovado");
} else if (media < 7.0 && media >= 4.0) {
    console.log("Recuperacao");
} else if (media < 4.0) {
    console.log("Reprovado");
}