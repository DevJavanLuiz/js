const pessoas = [

    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Javan' },
    { id: 1, nome: 'Sabrina' }

];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[ id ] = {...pessoa}; 
// }


const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa}); 
}


for(const pessoa of novasPessoas.keys()){
    console.log(pessoa)
}