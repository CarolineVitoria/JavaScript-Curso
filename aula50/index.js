//arguments
function funcao(a, b, c){
    console.log(a, b, c, arguments);
}
funcao('a vida', 'é', 'complicada');
function soma(a, b, c=5){ //se c não tiver um valor atribuido, 5 é o valor padrão
    b = b||2; //se b não tiver valor atribuido, add 0
    console.log(a+b+c);
}
soma(2,9);
//atribuição via desestruturação
function atri({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
atri({nome:'vitória', sobrenome:'vi', idade:18});

var conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+'){acumulador+=numero};
    }
    console.log(acumulador)
};
conta('+', 0, 20, 90, 1);