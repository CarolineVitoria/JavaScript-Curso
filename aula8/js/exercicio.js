//preciso descobrir qual é o ano de nacimento com base na sua idade, e fazer o cálculo de IMC 

let nome ='kat';
let idade = 18;
let altura = 1.65;
let pesoKg = 60;
let anoAtual = 2021;
const imc = pesoKg/(altura*altura);
let anoNascimento = anoAtual-idade;

//template strings

console.log(`${nome} tem ${idade} anos e pesa ${pesoKg} Kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc.toFixed(2)}`);
console.log(`nasceu em ${anoNascimento}`);