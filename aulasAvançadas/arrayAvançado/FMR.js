// FILTRAR PARES
// DOBRAR VALORES
// SOMAR TODOS
//RETORNAR A SOMA DO DOBRO DE TODOS OS PARES

const numeros =  [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// FILTRAR PARES
const pares = numeros.filter((valor)=>{
    if(valor % 2 === 0) return valor;
});
console.log(`Numeros pares: ${pares}`);


// DOBRAR VALORES
const valorDobrado = pares.map(valor => valor * 2);
console.log(`Valores dobrados ${valorDobrado}`);


const paresDobrados = pares.map(valor => valor * 2);


//RETORNAR A SOMA DO DOBRO DE TODOS OS PARES
const somaDobroPares = paresDobrados.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
});
console.log(`Soma dos pares dobrados: ${somaDobroPares}`);


