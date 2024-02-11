const pessoa = new Object();
pessoa.nome = 'Javan';
pessoa.idade = 21;
pessoa.dataNascimento = function()  {
    const data = new Date();
    const dataAnoNascido = data.getFullYear() - this.idade;
    return `${this.nome} nasceu no ano de ${dataAnoNascido}`
}


// const pessoa = {
//     nome: 'Javan'
// }
// pessoa1.nome = 'Luizinho';



function criaPessoa (nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomeCompleto() {
            return this.nome + this.sobrenome;
        }
    }
}

const cliente = criaPessoa('Javan ', 'Luiz');



function Pessoa (nome){
    this.nome = nome;

    Object.freeze(this);
}

const pessoa4 = new Pessoa('javan');
pessoa4.nome = 'Luizinho';
console.log(pessoa4);

