const condicao = true;
//let tem escopo de bloco{...bloco}
//var só tem escopo de função
let nome = 'ryu';
var nome2= 'kido';
if(condicao){
    let nome= 'mi'; //criando uma nova variável
    var nome2 = 'zod'; //redeclarando

    if(condicao){
        var nome2 = 'bat';
    }
}
console.log(nome, nome2);
let jogo = 'batman lego';
function mostrarJogo(){
    console.log(jogo);
}
mostrarJogo();
