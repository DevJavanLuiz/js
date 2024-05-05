class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentar() {
        this.volume += 2;
    }
    diminuir() {
        this.volume -= 2;
    }

    static manutencao(){
        console.log('Aviso de manutenção!!!')
    }
}


const controle0 = new ControleRemoto('LG');
controle0.aumentar()
controle0.aumentar()
controle0.aumentar()
controle0.aumentar()
controle0.diminuir()
ControleRemoto.manutencao()
console.log(controle0);