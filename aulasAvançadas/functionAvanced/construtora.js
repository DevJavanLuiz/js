function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log( this.nome + ': Bem vindo!');
    }
};

const p1 = new Pessoa ('Javan', 'Luiz');
const p2 = new Pessoa ('Sabrina', 'Marleide');

p2.metodo();
