let btnCnt = document.querySelector("#btnConta");
let pCnt = document.querySelector("#pConta");

let c = 0;

btnCnt.addEventListener('click', () =>{
    c++;
    pCnt.textContent = `Hai cliccato il pulsante ${c} volte`;
});
