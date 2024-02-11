// const numeros =  [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const reduction = numeros.reduce((acumulador,valor) => {
//     if (valor / 2 === 0) return;
//     console.log(acumulador, valor)
//     return acumulador + valor;
// }, 0);
// console.log('Valor Total: ' +  reduction); 



const pessoas = [
    {nome: 'JavanJr', idade: 21},
    {nome: 'Javan', idade: 60},
    {nome: 'Sabrina', idade: 20},
    {nome: 'Leony', idade: 37},
    {nome: 'Luzinete', idade: 64},
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
        if(acumulador.idade > valor.idade) return acumulador;
        return valor;
});

console.log(pessoaMaisVelha);