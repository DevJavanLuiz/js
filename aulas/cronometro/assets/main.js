function getSeconds (seconds){
    const data = new Date(seconds * 1000); // *1000 utilizado para transforma milesimos em segundos

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

const exibTime = document.querySelector('#time');

const p = document.createElement('p');
exibTime.appendChild(p);
p.innerHTML = '00:00:00';
p.style.fontSize = '50px';

let segundos = 0;
let timer;

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function iniciarRelogio () {
    timer = setInterval(function () {
        segundos++
        p.innerHTML = getSeconds(segundos);
        p.style.color = 'black';
    }, 1000);
}

document.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('iniciar')){
        clearInterval(timer)
        iniciarRelogio();
    }
    
    if(element.classList.contains('pausar')){
        clearInterval(timer);
        p.style.color = 'rgb(189, 21, 189)'    }

    if(element.classList.contains('zerar')){
        clearInterval(timer);
        p.innerHTML = '00:00:00'
        segundos = 0;
        p.style.color = 'black'
    }
})









