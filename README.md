# js campominato dom

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.

## Passaggi esercizio base

1. Creo un container che conterrà i quadrati (terreno di gioco)
2. Salvo il container in una variabile
3. Faccio un ciclo su 100
4. Ad ogni ciclo si genera un quadrato
5. Ad ogni quadrato aggiungo un evento click
6. Al click del quadrato aggiungo/tolgo la classe che me lo differenzia
7. Aggiungo al container il quadrato
8. Creo il tasto reset
9. Creo il dropdown con i livelli di difficoltà
10. Creo una funzione per ogni livello di difficoltà (con ciclo for) che richiamo al premere del bottone start (condizione)

## Passaggi nuova consegna
1. Creo un array vuoto per le 16 caselle che sarano le bombe
2. Creo una funzione randomica che mi estrae i numeri
3. Stampo i numeri delle caselle e gli assegno la classe css della bomba se vengono premute
4. Controllo che il numero estratto sia univoco
5. Creo un contatore per i punti che faccio se premo le caselle corrette
6. Controllo per evitare che una casella non possa essere premuta all'infinito
7. Condizione di sconfitta: è stata premuta una casella bomba
8. Condizione di vittoria: sono finite le caselle normali
9. Quando il gioco finisce la griglia si blocca, compaiono tutte le caselle bomba e compare la scritta con il punteggio
