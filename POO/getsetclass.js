const _velocidade = Symbol();

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++
    }

    get velocidade() {
        return this[_velocidade];
    }
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if ( valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
}

const fusca = new Carro('fusca');

for (let i = 0; i <= 150; i++) {
    fusca.acelerar()
}

fusca.velocidade = 999
console.log(fusca.velocidade)