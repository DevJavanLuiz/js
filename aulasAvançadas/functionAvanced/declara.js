//DECLARAÇÃO DE FUNCÇÃO 
function falaOi () {
    return console.log('Oi');
}
falaOi();

// FIRST-CLASS OBJECT 
// FUNCTION EXPRESS --- ATRIBUIDA A UMA CONST
const olaMundo = function(){
    return console.log('Olá Mundo!');
}
olaMundo();

//FUNCTION FOR EXECUTING FUNCTION 
function executaFuncao (funcao){
    return funcao();
}
executaFuncao(olaMundo);

//ARROW FUNCTION SERIA UMA FUNCTION EXPRESS MAIS CURTA
const funcaoArrow = () => {
    console.log('Minha arrow function...');
}
funcaoArrow();

//FUNÇÕES TAMBÉM PODEM SER VALORES DE UM OBJETO
const objeto = {
    falar(){
        console.log('Eae');
    }
};
objeto.falar();
