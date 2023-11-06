'use strict';
// 1. Chiedi all'utente il numero di chilometri da percorrere
const distanza = parseInt(prompt("Inserisci il numero dei kilometri che vuoi percorrere:"));
// 2. Chiedi all'utente la sua età
const etaUtente = parseInt(prompt("Insterisci la tua età:"));
// 3. Verifica se il valore inserito per i chilometri è un numero valido
if (isNaN(distanza) || isNaN(etaUtente)) {
    alert("Non hai inserito un numero, ricarica la pagina per riprovare.")
} else {
    // 4. Calcola il prezzo del biglietto
    let prezzo = distanza * 0.21;
    // 5. Applica lo sconto in determinate condizioni
    if (etaUtente < 18) {
        prezzo *= 0.8;
    } else if (etaUtente >= 65) {
        prezzo *= 0.6;
    }
    // 6. Comunica il prezzo finale
    console.log("Il prezzo del biglietto è: " + prezzo.toFixed(2) + " euro.");
    alert("Il prezzo del biglietto è: " + prezzo.toFixed(2) + " euro.");
}