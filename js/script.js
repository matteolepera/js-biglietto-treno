////////////////////////////////
////////////TRACCIA////////////
////////////////////////////////
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// Prima di scrivere il codice impostate il ragionamento nei commenti!

// Bonus:
// Applicare dei controlli sull'input dell'utente

// DATI DA CHIEDERE ALL'UTENTE (Prompt):
// Chilometri da percorrere, età passeggero;

// DATI A DISPOSIZIONE:
// Prezzo biglietto 0.21 al chilometro;
// sconto minorenni 20%;
// sconto anziani 40%;

//RAGIONAMENTO:
// Calcolo prezzo biglietto:
// prezzo biglietto moltiplicato per chilometri.
// Sconto:
// sconto minorenni = prezzo biglietto * 0,20;
// sconto anziani = prezzo biglietto * 0,40;
// se età utente < 18 { prezzo biglietto - sconto minorenni }
// else if età utente >= 65 { prezzo biglietto - sconto anziani }
// else { nessuno sconto applicato }

let chilometriDaPercorrere = prompt("Quanti chilomentri vuoi percorrere?");
chilometriDaPercorrere = parseInt(chilometriDaPercorrere);


if (isNaN(chilometriDaPercorrere)) {
    alert("Errore: devi inserire i chilometri che vuoi percorrere!");
} else if (chilometriDaPercorrere < 1) {
    alert("I chilometri che hai inserito non sono validi!");
} else {

    let etaUtente = prompt("Quanti anni hai?");
    etaUtente = parseInt(etaUtente);

    if (isNaN(etaUtente)) {
        alert("Errore: devi inserire la tua età!");
    } else if (etaUtente < 1) {
        alert("La tua età non è valida!");
    }

    let tariffaBase = chilometriDaPercorrere * 0.21;


    let scontoGiovani = tariffaBase * 0.20; //sconto 20%
    let scontoAnziani = tariffaBase * 0.40; //sconto 40%

    let prezzoScontato = tariffaBase;

    if (etaUtente < 18) {
        prezzoScontato = tariffaBase - scontoGiovani;

    } else if (etaUtente >= 65) {
        prezzoScontato = tariffaBase - scontoAnziani;

    }

    console.log(`Il prezzo del tuo biglietto è ${prezzoScontato = prezzoScontato.toFixed(2)}€`);

}