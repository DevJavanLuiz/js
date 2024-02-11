const produto = {
    nome: 'Maça',
    preco: 1.90
};

const copiandoProduto = Object.assign({}, produto);
const copiandoProduto02 = {...produto}

console.log(produto)
console.log(copiandoProduto) 
console.log(copiandoProduto02) 

