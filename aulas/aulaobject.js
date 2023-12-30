const pessoa = {
    nome: 'Javan',
    sobrenome: 'Luiz',
    idade: 20,
    endereco: {
    rua: 'Av Brasil',
    numero: 7610
    }
}

    const {endereco: {rua: r,numero}} = pessoa;
    const {nome, ...resto} = pessoa;

console.log(nome, resto);