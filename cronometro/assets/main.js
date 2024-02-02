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
p.style.color = 'grey'
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
    },1000);
}


document.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('iniciar')){
        clearInterval(timer);
        iniciarRelogio();
        document.querySelector('.iniciar').disabled = true;
        p.style.color = 'rgb(96, 96, 255)'
        exibTime.style.boxShadow = '0px 2px 20px 0px rgb(93, 93, 251)';
        exibTime.style.border = '3px solid  rgb(44, 19, 229)'
        iniciar.style.boxShadow = '0px 2px 20px 0px rgb(96, 96, 255)'
        iniciar.style.transform = 'scale(0.9)'
        iniciar.style.backgroundColor = 'rgba(0, 0, 145, 0.292)';
    }
    
    if(element.classList.contains('pausar')){
        clearInterval(timer);
        p.style.color = 'orange'    
        document.querySelector('.iniciar').disabled = false;
        iniciar.style.backgroundColor = 'rgb(0, 0, 145)'
        exibTime.style.boxShadow = '0px 2px 20px 0px orange'
        iniciar.style.transform = 'scale(1)'
        iniciar.style.boxShadow = 'none'
        exibTime.style.border = '3px solid orange'
    }

    if(element.classList.contains('zerar')){
        clearInterval(timer);
        p.innerHTML = '00:00:00'
        segundos = 0;
        p.style.color = 'grey'
        document.querySelector('.iniciar').disabled = false;
        iniciar.style.backgroundColor = 'rgb(0, 0, 145)'
        iniciar.style.transform = 'scale(1)'
        iniciar.style.boxShadow = 'none'
        exibTime.style.boxShadow = 'none'
        exibTime.style.border = '1px solid grey'
    }
})









