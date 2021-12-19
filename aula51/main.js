function criaObj(nome, sobrenome){
    return {nome, sobrenome};
}
const p1 = criaObj('korra', 'a lenda');
console.log(p1);

function frase1(comeco){
    function frase2(fim){
        return comeco + ' '+ fim;
    }
    return frase2;
}
const falaF1 = frase1('iae');
const falaF2 = falaF1('cara');
console.log(falaF2);
function recebeMult(multiplicador){
    return function (n){
        return n * multiplicador;
    };
}
const duplica = recebeMult(2);
const triplica = recebeMult(3);

console.log(duplica(8));
console.log(triplica(8));