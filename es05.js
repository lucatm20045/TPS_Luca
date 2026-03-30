// Creazione dell'oggetto libro con le proprietà richieste
let book = {
    Titolo: "Il Nome della Rosa",
    Autore: "Umberto Eco",
    AnnoDiPubblicazione: 1980,
    Genere: "Giallo storico",
    NumeroDiPagine: 503
};

// Stampa le proprietà dell'oggetto sulla console utilizzando un ciclo for...in
for (let key in book) {
    // Stampiamo nome della chiave e valore associato
    console.log(`${key} -> ${book[key]}`);
}
