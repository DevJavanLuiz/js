function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;      //Atribuindo o valor que sera passado no paramentro
    this.saldo = saldo;
}


Conta.prototype.sacar = function (valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor
        return this.verSaldo()
    }
    return console.log(`Saldo Insuficiente: ${this.saldo.toFixed(2)}`)
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function () {
    console.log(`
    Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}
    `);
}
const conta1 = new Conta(1120, 121257, 90);

function ContaC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaC.prototype = Object.create(Conta.prototype);
ContaC.prototype.constructor = ContaC;

ContaC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Limite Insuficiente!');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const contaC = new ContaC(2102, 123315, 10, 100);
console.log(contaC)
contaC.depositar(50)
contaC.sacar(90)
