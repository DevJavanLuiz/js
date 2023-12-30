const data = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let dataFormatada = data.toLocaleDateString('pt-BR', options);
function exibirData() {


    const resultado = document.querySelector('.resultado p');
    resultado.innerHTML += `Data Atual: ${data}<br>`

}

