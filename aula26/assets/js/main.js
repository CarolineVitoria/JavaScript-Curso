function meuEscopo() {
    const form = document.querySelector('form');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resposta = document.querySelector('#resposta');
    const container2 = document.querySelector('.container2');
    const linkAbrir = document.querySelector('#linkAbrir')
    const linkFechar = document.querySelector('#linkFechar');
    const vPeso = peso.value;
    const vAltura = altura.value;

    function filtro(evento) {
        evento.preventDefault();
         if(!isNaN(vPeso) && !isNaN(vAltura)){
            calculoIMC();
        }else{
            resposta.innerHTML ='Por favor insira dados válidos';
        }

    }
    function calculoIMC() {
        const resultado = vPeso/(vAltura**2);

        if(vPeso==0 || vAltura==0){
            resposta.innerHTML ='Por favor insira dados válidos';
        }else if(resultado < 18.5) {
            resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está abaixo do peso`;
        }else if(resultado>=18.5 && resultado<=24.9) {
            resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está no peso normal`;
        }else if(resultado>=25 && resultado<=29.9){
            resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está com sobrepeso`;
        }else if(resultado>=30 && resultado<=34.9){
            resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está com obesidade grau 1`;
        }else if(resultado>=35 && resultado<=39.9){
            resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está com obesidade grau 2`;
        }else if(resultado>=40){
            return resposta.innerHTML = `Resultado: Seu IMC é: ${resultado.toFixed(1)}, você está com obesidade grau 3`;
        }
    }
    function abrirAba(){
        container2.style.display ='block';
    }
    function fecharAba(){
        container2.style.display='none';
    }
    
    form.addEventListener('submit', filtro);
    linkAbrir.addEventListener('click', abrirAba);
    linkFechar.addEventListener('click', fecharAba);
}
meuEscopo();