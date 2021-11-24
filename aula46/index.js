function retornaHora(){
    const hora = new Date();
    return hora.toLocaleTimeString('pt-BR');
}
const timer = setInterval(function(){
    console.log(retornaHora());
}, 1000);
setTimeout(function(){
    clearInterval(timer);
}, 6000);
setTimeout(function(){
    console.log('olá mundo');
}, 8000);