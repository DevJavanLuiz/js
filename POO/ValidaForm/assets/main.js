class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {  //CAPTURANDO EVENTO SUBMIT
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const campoValido = this.camposValidos();
        const senhaValida = this.senhasValidas();

        if(campoValido && senhaValida){
            alert('Formulário Enviado.');
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repSenha.value) {
            valid = false
            this.criaError(senha, 'Senha diferente.');
            this.criaError(repSenha, 'Senha diferente.');
        }
        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaError(senha, 'Precisa ter entre 6 e 12 caracteres.')
        }

        return valid;
    }

    camposValidos() {
        let valid = true;

        for (let error of this.formulario.querySelectorAll('.error-text')) {
            error.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            if (!campo.value) {
                this.criaError(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaError(campo, 'Precisa ter entre 3 e 12 caracteres.');
            valid = false
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaError(campo, 'Precisa conter apenas letras e/ou números.');
            valid = false
        }
        return true;
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida()) {
            this.criaError(campo, 'CPF Inválido.');
        }
        return true
    }

    criaError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();