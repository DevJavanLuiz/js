
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpflimpo;
    }

    geraCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfParcial);
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }
    static geraDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNum of cpfParcial){
            total += reverso * Number(stringNum)
            reverso--
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;//this utilizado pq cpfLimpo esta dentro de validaCpf
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false
        this.geraCpf();
        
        return this.novoCpf === this.cpfLimpo;
    }
}
const cpf = new ValidaCpf('070.987.720-03');
console.log(cpf.valida())

