function soma(x, y){
    const resultado = x+y;
    return resultado;
}
console.log(soma(5, 6));
console.log(soma(89, 17));

function mult(x, y=1){
    const resultado = x*y;
    return resultado;
}
const produto = mult(2);
console.log(produto);

//função anônima
const raiz = function (n){
    return n**0.5;
}
console.log(raiz(16));

//arrow function
const div = n => n/2;

console.log(div(12));