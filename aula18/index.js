const time = {
    nome:'Corinthians',
    idade: 111,
    frase() {
        console.log(`${this.nome} é um time de tradição`);
    }
};
console.log(time.nome);
time.nome = 'coringao'; //alterando
console.log(time.nome); 
time.titulos =['paulistão', 'copa do brasil', 'brasileirão', 'libertadores', 'mundial']; //adicionando
console.log(time); 
delete time.titulos;
console.log(time);
time.frase();

//função que cria objetos

function criaTimes (nome, idade){
    return {
        nome: nome,
        idade //forma abreviada

    };
}
const armazena = criaTimes('Corinthian-Casuals', 82);
console.log(armazena);



