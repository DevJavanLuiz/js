const numero01 = 110;
const numero02 = 20;

const numeroRetornado = maiorNumero(numero01,numero02);
console.log(numeroRetornado);

function maiorNumero (num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
    
}

//FORMA DADA NA AULA 

//function maiorNumero (num1, num2){
//     if(num1 > num2) return num1;
//         return num2;
// }

//function maiorNumero (num1, num2){
//         return num1 > num2 ? num1 : num2;      //condição ternária.
// }


//Usando Arrow Function 

const max = (num1, num2)=>{
 return num1 > num2 ? num1 : num2;
}
//const max = (num1, num2)=> num1 > num2 ? num1 : num2;


console.log(max(10,50));