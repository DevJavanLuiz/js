function exibData (data){
    if (data && !(data instanceof Date)){
       throw new TypeError('Não é uma data.');
    }

    if (!data){ 
         data = new Date()
    }
    
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try{
    //codigo com possivel erro
const data = new Date('01-01-1970 12:58:12');
const hora = exibData(data);
console.log(hora)

}catch(err){

console.log(err);

}finally{
    console.log('Tenha um bom dia!');
}
