let larghezza = prompt("Inserisci la larghezza della scatola:");
let altezza = prompt("Inserisci l'altezza della scatola:");
let lunghezza = prompt("Inserisci la lunghezza della scatola:");

larghezza = Number(larghezza);
altezza = Number(altezza);
lunghezza = Number(lunghezza);

let volume = larghezza * altezza * lunghezza;

console.log("Il volume della scatola è: " + volume);
