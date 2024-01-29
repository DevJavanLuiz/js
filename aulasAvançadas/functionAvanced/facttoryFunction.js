function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        //GETTER 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' '); //TRANSFORMA EM ARRAY
            this.nome = valor.shift();  //RETORNA O PRIMEIRO VALOR 'LUIZINHO' PARA VARIAVEL NOME E REMOVE DO ARRAY
            this.sobrenome = valor.join(' '); //ADICIONANDO O RESTO DO ARRAY NO SOBRENOME
            console.log(valor);
        },

        atividade(tarefa) {
            return `${this.nome} ${this.sobrenome} está ${tarefa}`
        },

        altura,
        peso,

        //GETTER
        get imc() {
            const calcImc = this.peso / (this.altura ** 2);
            return calcImc.toFixed(2);
        }
    };

}
const pessoa01 = criaPessoa('Javan', 'Junior', 90, 1.80);
console.log(pessoa01.atividade('Em analise'));
console.log(pessoa01.imc);

pessoa01.nomeCompleto = 'Luizinho Silva' //FICA POSSIVEL ALTERAR O VALOR POR CONTA DO SETTER NESSA 'FUNÇÃO'
console.log(pessoa01.nomeCompleto);

console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);

