//prendo gli elementi che mi servono dall'HTML

let btn = document.querySelector('#bottone');
let prf = document.querySelector('#paragrafo');


//creo l'evento che ci sarà al momento del clik del bottone
btn.addEventListener('click',()=>{

//assegno la classe custom al paragrafo per nasconderlo ad ogni click, utilizzando il toggle così che non sia fisso
    prf.classList.toggle('custom');
//utilizzando l'if chiedo se il paragrafo contiene la classe assegnata, se c'è il testo del bottone diventa MOSTRA
    if (prf.classList.contains('custom')){

        btn.innerHTML = 'Mostra';
        
    }
//Se invece il paragrafo non contiene la classe custom il testo del bottone diventa nascondi
    else{
        btn.innerHTML = 'Nascondi';
    }
    
    

   
})