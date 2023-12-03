//let num1 = 1;
//let num2 = 2.5;
//let num3 = 10;
//let num4 = 10.436528;
//
//console.log(num1.toString() + num2);
//console.log(num3.toString(2));
//console.log(num4.toFixed(2));
//console.log(Number.isInteger(num2));
//console.log(Number.isInteger(num3));
//
//let temp = 'ola';
//
//console.log(temp * num1);
//console.log(Number.isNaN(temp));

let num5 = 0.7;
let num6 = 0.1;

// 0.8num5 += num6; 
// 0.9  num5 += num6;     
// 0.1num5 += num6; 

//console.log(Number.isInteger (num5)); Volta FALSE
//console.log(num5);

num5 = ( (num5 * 100) + (num6 * 100) ) / 100 ;
num5 = ( (num5 * 100) + (num6 * 100) ) / 100 ;
num5 = ( (num5 * 100) + (num6 * 100) ) / 100 ;

console.log(num5)
console.log(Number.isInteger(num5));
