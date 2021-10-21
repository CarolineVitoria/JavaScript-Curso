/*
valores primitivos: string, number, boolean, undefined, null, (bigInt e symbol)
valores de referêcia: array, object e function
*/
let A = [1, 2 , 3];
let B = A; //'linkado' com A, aponta para o mesmo lugar na memória, se eu alterara um deles o valor do outro também será alterado
let W = [...A]; //Copias do valor de A
console.log(A, B, W);
A.push(9);
console.log(A, B, W);

let C = 10;
let D = C; //valor apenas copiado
console.log(C, D);
C = 20;
console.log(C, D);
