/*
Da pra usar o if sozinho
O else só pode ser usado depois de um if
Eu posso ter vários else if na checagem
Só posso ter um else na checagem
*/
const hora = 78;
if (hora>=0 && hora<=11){
    console.log('bom dia');
}else if(hora<=12 && hora<=17){
    console.log('boa tarde');
}else if(hora>=18 && hora<=23){
    console.log('boa noite');
}else{
    console.log('por favor digite um número entre 0 e 24');
}
const tenhoGrana = true;
if(tenhoGrana){
    console.log('vou dar um rolê');
}else{
    console.log('não vou dar um rolê')
}