const nome = document.querySelector('#nome'); //capturando um input do type=text
const sobrenome = document.querySelector('#sobrenome'); //capturando um input do type=text
const idade = document.querySelector('#idade'); //capturando um input do type=text

const result = document.querySelector('#result')

const resultPessoa = pessoaTest(nome,sobrenome,idade);

result.innerHTML = resultPessoa;

function pessoaTest (nome,sobrenome,idade){  
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,                
        idade: idade 
    };

    return pessoa;
} 