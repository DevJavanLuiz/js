// function testNumber (num1){
//     if (num1 % 3 === 0){
//         console.log('Fizz');
//     }
//     else if (num1 % 5 === 0){
//         console.log('Buzz');
//     }
//     else if (num1 % 5 === 0 && num1 % 3 === 0){
//         console.log('FizzBuzz');
//     }
//     else{
//         return num1
//     }
//     return 
// }

// console.log(testNumber())

function fizzBuzz (num){
    if(typeof num !== 'number') return NaN;
    if(num % 5 === 0 && num % 3 === 0) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    else return num;

}

console.log('a',fizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(i,fizzBuzz(i));
}