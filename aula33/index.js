const pessoa = {
    nome: 'ryu',
    sobreNome: 'kido',
    idade: 18,
    endereco:{
        planeta: 'marte'
    }
};
const {sobreNome, idade: id ='', endereco: {planeta}} =  pessoa;
console.log(sobreNome, id, planeta);