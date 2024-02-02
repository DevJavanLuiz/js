// const numeros =  [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const valorDobrado = numeros.map(valor => valor * 2);

// console.log(valorDobrado);


const pessoas = [
    {nome: 'JavanJr', idade: 21},
    {nome: 'Javan', idade: 60},
    {nome: 'Sabrina', idade: 20},
    {nome: 'Leony', idade: 37},

];

// const nomesStrings = pessoas.map(obj =>  obj.nome);
// const apenasIdades = pessoas.map(obj => {
//     delete obj.nome;
//     return obj
//     // return {idade: obj.idade};
// });

const comId = pessoas.map((obj, indice)=>{
    const objCopiado = {...obj}
    objCopiado.id = indice;
    return objCopiado;
}) 

console.log(pessoas);
console.log(comId);
// console.log(nomesStrings);
// console.log(apenasIdades);