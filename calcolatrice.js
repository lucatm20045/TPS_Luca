const args = process.argv.slice(2);

let num1 = Number(args[0]);
let operazione = args[1];
let num2 = Number(args[2]);

let risultato;

if (isNaN(num1) || isNaN(num2)) {
    console.log("Errore: inserire due numeri validi");
    process.exit();
}

if (operazione === "add") {
    risultato = num1 + num2;
} else if (operazione === "sub") {
    risultato = num1 - num2;
} else if (operazione === "mul") {
    risultato = num1 * num2;
} else if (operazione === "div") {
    if (num2 === 0) {
        console.log("Errore: divisione per zero");
        process.exit();
    }
    risultato = num1 / num2;
} else {
    console.log("Operazione non valida. Usa: add, sub, mul, div");
    process.exit();
}

console.log("Risultato:", risultato);
