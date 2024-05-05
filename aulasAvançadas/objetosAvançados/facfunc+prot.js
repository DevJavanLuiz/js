function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = { // Criando o prototype
        fala() {
            console.log(`${this.nome} ${this.sobrenome} está falando`);
        },
        comer() {
            console.log(`${this.nome} ${this.sobrenome} está comendo`);
        },
        beber() {
            console.log(`${this.nome} ${this.sobrenome} está bebendo`);
        }
    }


    return Object.create(pessoaPrototype, { //linkando o prototype a essa função
        nome: {value: nome}, //Atribuindo o valor dos parametros
        sobrenome: {value: sobrenome} // //Atribuindo o valor dos parametros
    }); 
}

const pessoa1 = criaPessoa('Javan', 'Luiz');

