// Immediately invoked function expression 
function qualquerCoisa(){
    //Coloca tudo dentro dessa função para nao mexer no Escopo Global
} 
qualquerCoisa();

//CRIAR UMA FUNÇÃO PARA NAO MEXER NO ESCOPO GLOBAL (ANÔNIMA)
(function (){
    const nome = 'javan';
    console.log(nome);
})() ;

