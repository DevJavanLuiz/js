const nomes = ['Javan', 'Luizinho'];

//unshift
// nomes.splice(0, 0, 'Sabrina', 'Luzinete', 'Leony');

//shift
const removido = nomes.splice(0, 1);

//pop
// const removido = nomes.splice(1, 1)

//push
// nomes.splice(nomes.length, 0, 'Luzinete', 'Leony');

console.log(nomes);
console.log(removido);