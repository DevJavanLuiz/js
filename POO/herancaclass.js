class Smartphone {
    constructor(nome) {
        this.nome = nome;
        this.ligado = true;
    }
    liga() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
        }
        this.ligado = true;
    }
    desliga() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`);
        }
        this.ligado = false;
    }

}

class Telefone extends Smartphone{
    constructor(nome, modelo){
        super(nome);

        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone');
const t1 = new Telefone('Samsung', 's10');

console.log(t1)