// const objtA = {
//     chaveA: 'A'
// }

// const objtB = {
//     chaveB: 'B'
// }

// // console.log(objtA, objtB)

// Object.setPrototypeOf(objtA, objtB);
// console.log(objtA)

function Produto (nome, valor){
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.desconto = function (percentual){
    this.valor = this.valor - this.valor * (percentual / 100);
}

const p1 = new Produto('Camisa Azul', 50);
p1.desconto(50);

const p2 = {
    nome: 'Sapato',
    valor: 100
}

Object.setPrototypeOf(p2, Produto.prototype );
p2.desconto(50);

const p3 = Object.create(Produto.prototype, {
    nome: { 
        enumerable: true,
        value: 'Short'
    },
    valor: { 
        enumerable: true,
        writable: true,
        value: 70
    },
    tamanho: { 
        enumerable: true,
        value: 42
    }
});

p3.desconto(50)
console.log(p3)