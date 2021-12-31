function criaObjeto(nome, sobrenome, idade, altura, peso, nomecompletoo){
  return {
    nome,
    sobrenome,
    idade,
    nomecompletoo,
    fala(assunto){
      return `${nome} ${assunto}`;
    },
    altura,
    peso,
    get imc(){
      return (`${nome} tem o IMC de ${peso/(altura**2)}`);
    },
    get nomeCompleto(){
      return `${nomecompletoo}`;
    }, 
    set nomeCompleto(valor){
      valor= valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
  };
}
const ob1 = criaObjeto('vii','mendez', 18, 1.65, 59);
console.log(ob1.fala('é Corinthiana'));
console.log(ob1.imc);
ob1.nomeCompleto = 'vi ro mi'
console.log(ob1.nome);
console.log(ob1.sobrenome);