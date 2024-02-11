function Produto(nome, preco, estoque) {


    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

    let estoquePrivado = estoque;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof estoque !== 'number') return 'Invalid';
            
            estoquePrivado = valor;
        },
        configurable: true
    });


}

const biscoito = new Produto('Biscoito', 3.75, 234);
biscoito.estoque = 230
console.log(biscoito);