const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const content = document.querySelector('.content');

const div = document.createElement('div'); //Criando elemento div para armazenar a const 'elementos'

for (let i = 0; i < elementos.length; i++){
const {tag, texto} = elementos[i];  //desestruturando o objeto para realizar a inserção no html
let tagCriada = document.createElement(tag); //Criando todos os elementos envolvidos no objeto 'tag'

let textoCriado = document.createTextNode(texto); // No de texto
tagCriada.appendChild(textoCriado); // adicionando a let textoCriado como um filho da tagCriada

// tagCriada.innerText = texto;  //Adicionando o objeto texto dentro das tags, conforme é apresentado na const elementos 
div.appendChild(tagCriada);  //Adicionando todas as tags com os textos inclusos dentro da conts div que cria uma div 
}

content.appendChild(div); // adicionando a div com as tags e os textos dentro  da div content no html