let numero = Number( prompt ('Digite um número:'));
const numeroEscolhido = document.getElementById('numero-escolhido');
const texto = document.getElementById('texto');

numeroEscolhido.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Sua raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é um número NaN? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>${numero} arredondado para cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>${numero} com apenas duas casas: ${numero.toFixed(2)}. </p>`;


 
 
         
         
         
         