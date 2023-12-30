const usuario = 'Javan';
const senhaUsuario = '123456';

const vaiLogar = usuario === 'Javan' && senhaUsuario === '123456';
console.log(vaiLogar);



function falaOi (){
    return 'Oi';
}

const vaiExecutar = false; //Caso for false, ira retornar false, o programa nao iria avançar

console.log(vaiExecutar && falaOi());

console.log(0 || 'Javan' || 'Luiz' || NaN || true);


// Se o usario escolher uma cor ficara a escolhida senão ficara a cor padrão 

let corUsuario = 'Blue';
const corPadrao = corUsuario || 'Red';

console.log(corPadrao);