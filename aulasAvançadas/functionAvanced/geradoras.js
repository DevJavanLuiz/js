// function* gerador(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// const g1 = gerador();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

// // for (valores of g1){
// //     console.log(valores);
// // }


// function* gerador2(){
//     let i = 0;

//     while(true) {
//         yield i;
//         i++;
//     }
// }
// const g2 = gerador2()
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


// function* gerador3 (){
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* gerador4 (){
//     yield* gerador3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = gerador4();
// for(valores of g4){
//     console.log(valores);
// }


function* geradora5(){
    yield ()=>{
        console.log('Olá')
    }
    yield ()=>{
        console.log('Mundo!')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1()
func2()