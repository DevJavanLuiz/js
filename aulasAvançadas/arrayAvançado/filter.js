// const numeros =  [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const arrayMaior10 = numeros.filter(valor => valor > 10);
// console.log(arrayMaior10); 


const pessoas = [
    {nome: 'JavanJr', idade: 21},
    {nome: 'Javan', idade: 60},
    {nome: 'Sabrina', idade: 20},
    {nome: 'Leony', idade: 37},

]

const nomeMaior6 = pessoas.filter(obj => obj.nome.length >= 6);
const maior50 = pessoas.filter(obj => obj.idade >= 30);
const terminaComA = pessoas.filter(obj => {
   return obj.nome.toLowerCase().endsWith('a'); 
})

// console.log(maior50);
console.log(terminaComA);

