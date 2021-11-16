//for in --> lê os índices de uma array ou chaves de um objeto
const frutas = ['pera', 'uva', 'maça'];

for(let indice in frutas){
    console.log(indice);
}
const pessoa={
    nome: 'Nathan',
    idade: 34
};
const chave = pessoa['nome'];
console.log(chave);

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
