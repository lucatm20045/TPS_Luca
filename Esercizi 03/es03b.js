let m = Number(prompt("Inserisci il coefficiente angolare m:"));
let c = Number(prompt("Inserisci il termine noto c:"));

let y1 = m * (-1) + c;
let y2 = m * 10 + c;

let intersezioneY = c;

let intersezioneX = -c / m;

console.log("Per x = -1, y = " + y1);
console.log("Per x = 10, y = " + y2);

console.log("Intersezione con l'asse Y: (0, " + intersezioneY + ")");
console.log("Intersezione con l'asse X: (" + intersezioneX + ", 0)");
