let dUno = document.querySelector('#div_uno');
let dDue = document.querySelector('#div_due');
let dTre = document.querySelector('#div_tre');
let btnRed = document.querySelector('#btnRosso');
let btnGreen = document.querySelector('#btnVerde');
let btnBlue = document.querySelector('#btnBlu');


//Creazione della funzione che mi permette di ottenere un Colore Casuale 
function getRandomRgbColor() {

  //Math.floor(Math.random() * 256) è la formula che permette di creare randomicamente un numero da 0 a 256 e che assegnerà alla variabile creata.          
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // crea la stringa rgb che contiene tutti i valori creati randomicamente con la formula prima utilizzata, mettendoli insieme e dando vita al colore random.
  return `rgb(${r}, ${g}, ${b})`;
}

//Assegno al primo pulsante tramite un click il cambio di colore randomico del DIV, creo una variabile nuova alla quale assegno la funzione per ottenere il colore randomico, dopodiche con la scrittura obbligata per java , assegno questo colore nuovo al Div di competenza
btnRed.addEventListener('click', ()=>{
 let randomColor = getRandomRgbColor();
 dUno.style.backgroundColor = randomColor;
});
//Assegno al primo pulsante tramite un click il cambio di colore randomico del DIV, creo una variabile nuova alla quale assegno la funzione per ottenere il colore randomico, dopodiche con la scrittura obbligata per java , assegno questo colore nuovo al Div di competenza

btnGreen.addEventListener('click', ()=>{
    let randomColor = getRandomRgbColor();
    dDue.style.backgroundColor = randomColor;
});

//Assegno al primo pulsante tramite un click il cambio di colore randomico del DIV, creo una variabile nuova alla quale assegno la funzione per ottenere il colore randomico, dopodiche con la scrittura obbligata per java , assegno questo colore nuovo al Div di competenza

btnBlue.addEventListener('click', ()=>{
    let randomColor = getRandomRgbColor();
   dTre.style.backgroundColor = randomColor;
})