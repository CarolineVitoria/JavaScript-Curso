/*
*Existem duas categorias de tipos de dados que podemos trabalhar, os primitivos e os objetos.
*A distinção entre dados primitivos e objetos é importante pois o JS os trata de forma diferente
*Os dados primitivos são: string, number, boolean, undefined, null e symbol
*Se o dado não for primitivo é tecnicamente um objeto
*/
let a = 10;
let b = a;
console.log(b);
let a = 20;
console.log(b);
let nome = 'Luiz'; //string
let idade = 24; //number
let peso = 87.5; //number
let cpf; //undefined 
let emprego = null; //nulo
let aprovacao = true; //boolean
