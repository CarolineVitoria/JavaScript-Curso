//faça uma função que receba dois número e retorne o maior deles
const num1 = Math.floor(Math.random() *(100-1) + 1);
const num2 = Math.floor(Math.random() *(100-1) + 1);
console.log(num1, num2);

function retornaMaior(num1, num2){
    if(num1>num2){
        return num1;
    }else if(num1<num2){
        return num2;
    }return 'são números iguais';
}

console.log(retornaMaior(num1, num2));