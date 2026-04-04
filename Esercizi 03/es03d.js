let val1 = 10;                // number
let val2 = "Ciao";            // string
let val3 = null;              // null
let val4 = { nome: "Mario" }; // object
let val5 = function () {};    // function

function determinaTipo(valore) {
  if (valore === null) {
    console.log("È null");
  } else if (typeof valore === "number") {
    console.log("È un numero");
  } else if (typeof valore === "string") {
    console.log("È una stringa");
  } else if (typeof valore === "object") {
    console.log("È un oggetto");
  } else if (typeof valore === "function") {
    console.log("È una funzione");
  }
}

determinaTipo(val1);
determinaTipo(val2);
determinaTipo(val3);
determinaTipo(val4);
determinaTipo(val5);
