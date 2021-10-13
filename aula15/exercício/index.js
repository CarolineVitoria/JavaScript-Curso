const numero = Number(prompt('Insira um número'));
const numeroH1 = document.getElementById('numeroH1');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondaC = document.getElementById('arredondaC');
const arredondaB = document.getElementById('arredondaB');
const duasCasasDecimais = document.getElementById('duasCasasDecimais');


numeroH1.innerHTML=numero;
raiz.innerHTML = `A raiz do seu número é: ${numero ** 0.5}`;
inteiro.innerHTML = `É inteiro: ${Number.isInteger(numero)}`;
nan.innerHTML = `É NaN: ${Number.isNaN(numero)}`;
arredondaC.innerHTML = `Arredondado pra cima: ${Math.ceil(numero)}`;
arredondaB.innerHTML = `Arredondado pra baixo: ${Math.floor(numero)}`;
duasCasasDecimais.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;


