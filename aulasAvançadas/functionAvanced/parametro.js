//SOMANDO ARGUMENTOS

function argumenstsSoma () {
    total = 0
    for(let argumentos of arguments){ //ARGUMENTS É UMA VARIAVEL QUE SUSTENTA TODOS ARGUMENTOS DA FUNÇÃO
        total += argumentos
    }
    console.log(total)
}
argumenstsSoma (1, 2, 3, 4, 5, 6, 7 ) // ARGUMENTOS

function soma (a, b = 2) {
    b = b || 3 // SETANDO VALOR PADRÃO PARA B OU DA NOVA MANEIRA A CIMA
    return console.log(a + b)
}
soma (2) // APENAS VALOR DE A

function destruturacao ({nome, sobrenome, idade}){ //TAMBÉM SERVE PARA ARRAY
    console.log(nome, sobrenome, idade);
}
let objeto = {nome: 'Javan', sobrenome: 'Luiz', idade: 20 }; //NECESSARIO PASSAR UM OBJETO
destruturacao(objeto);

const conta = (operador, acumulador, ...numeros) =>{  // 3 PONTOS CONHECIDO COMO OPERADOR DE RESTO
    for (let numero of numeros){
        if(operador === '+')  acumulador += numero;
        if(operador === '*')  acumulador *= numero;
        if(operador === '-')  acumulador -= numero;
    }
    console.log(acumulador);
}
conta('-', 0, 10 , 20 , 30, 40, 50 );

