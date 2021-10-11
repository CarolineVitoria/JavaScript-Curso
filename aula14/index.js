const num1 =  10.5;
const num2 = 24;
console.log(num1.toString()+num2); //"converte temporariamente"
console.log(num1.toString(2)); //converte pra binário
console.log(num1.toFixed(3)); //defini quantas casas decimais irão aparecer
console.log(Number.isInteger(num1)); // ,ostra se um número é inteiro
let temp = num2/'wow';
console.log(Number.isNaN(temp)); //para saber se um determndao dado é NaN
const num3 = 0.7;
const num4 = 0.1;
const soma = num3+num4;
console.log(soma); //impreciso 
console.log(Number(soma.toFixed(2)));
console.log(Number.isInteger(soma));