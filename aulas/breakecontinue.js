const array = [ 1, 2, 3, 4, 5];

for(let numeros of array){

    if(numeros === 2){
        console.log('Saltei!');
        continue;
    }

    console.log(numeros);
    if(numeros === 4){
        console.log('laço finalizado');
        break;
    }
}


