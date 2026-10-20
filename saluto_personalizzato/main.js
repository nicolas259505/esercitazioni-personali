//Prendo le variabili che mi servono dall'HTML

let nm = document.querySelector('#nome');
let btn = document.querySelector('#saluta');
let msg = document.querySelector('#messaggio');

//Creo l'evento che ci sarà al click del bottone

btn.addEventListener('click',()=>{

    if(nm.value === ''){
        msg.textContent = 'Per favore inserisci un nome !';
    }
    else{

        //Vado a formare il messaggio che comparirà al momento del click nel paragarafo inserendo il valore preso dalla variabile nm
        msg.textContent = `Ciao ${nm.value} !`;

    }

    //Vado a svuotare il contenuto della variabile nm coì che sia pronta per l'inserimento di una nuova variabile
    nm.value = '';
})