function soma (a, b){
    return a + b;
}
soma (5 + 2);

function criaPessoa (nome, sobrenome){
    return {nome, sobrenome};
}
criaPessoa ('Javan', 'Luiz');

//RETORNA DUAS FUNÇÕES

function falaComeco (comeco){
    function falaResto (resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala =  falaComeco('Olá');
console.log(fala('Mundo!'));

function multiplica (multiplicador){
    return function(numero){
        return numero * multiplicador;
    }
}

const duplica = multiplica(2);
console.log(duplica(4)); //DUPLICA VIRA UMA FUNÇÃO PARA RECEBER A SEGUNDA FUNÇÃO DENTRO DA PRIMEIRA 