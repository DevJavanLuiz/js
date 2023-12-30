const paragrafos = document.querySelector('.paragrafos');
const todosP = paragrafos.querySelectorAll('p');

const capturaBody = getComputedStyle(document.body);
const backgroundBody = capturaBody.backgroundColor;


function mudarCor (){
    
    for(let i of todosP){
     i.style.backgroundColor = backgroundBody;
     i.style.color = '#FFFFFF'
     i.style.marginBottom = '10px'
    }


}


