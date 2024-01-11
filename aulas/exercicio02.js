// function ePaisagem (largura,altura){
//     if (largura === 297 && altura === 210){
//         console.log('---Modo Paisagem---');
//     }else{
//         console.log('---Modo Normal---')
//     }
//     return
// }

// const ePaisagem = (largura, altura) => {
//     return largura > altura ? '---Modo Paisagem---' : '---Modo Normal---';
// }

//Refatorada para retornar true or false

const ePaisagem = (largura, altura) =>  largura > altura
    

console.log (ePaisagem(500,200))