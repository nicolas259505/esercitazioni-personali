let element = document.querySelector('#elemento');
let list = document.querySelector('#lista');
let btn = document.querySelector('#bottone');

btn.addEventListener('click',()=>{

    if(element.value !== ''){
    let newEl = document.createElement(`li`);
    newEl.textContent = element.value;
    newEl.classList.add('oggetti');
    list.appendChild(newEl);
    }
    else{
        alert(`Il campo è vuoto!!`);
    }
    element.value = '';
})
