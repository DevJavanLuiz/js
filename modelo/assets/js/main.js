const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const valorImc = calcularImc(peso, altura).toFixed(2); 
    calcularNvl(valorImc);

    const msg = 'IMC : ' + valorImc + ' ( ' + calcularNvl(valorImc) + ' )';

    setResultado(msg, true);
    console.log(valorImc);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});

function criaP () {
    const p = document.createElement('p');
    return p
}

function setResultado(msg, validacao) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

    if  (validacao) {
        p.classList.add('paragrafo');
    }
    else if (validacao === false) {
      p.classList.add('paragrafoInvalido');
    }
}

function calcularImc(x, y) {
   return  x / y ** 2;
}

function calcularNvl (imc) {
    const array = ['Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade 1° grau',
        'Obesidade 2° grau',
        'Obesidade 3° grau']

if (imc < 18.5) {
    return array[0]
}
if (imc <= 18.5 || imc <= 24.9 ) {
    return array[1]
}
if (imc < 25 || imc <= 29.9) {
    return array[2]
}
if (imc < 30 || imc <= 34.9) {
    return array[3]
}
if (imc < 35 || imc <= 39.9) {
    return array[4]
}
if (imc > 40 ) {
    return array[5]
}

}
