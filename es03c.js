let voto = Number(prompt("Inserisci il voto:"));

let condizione = (voto >= 6);
let esito = (condizione === true) ? "Promosso" : "Bocciato";

console.log("Esito:", esito);
