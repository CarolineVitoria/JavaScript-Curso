const mais3h= 60*60*3*1000;
//const data= new Date(1000); //valor em miléssimos
//console.log(data.toString());
const novaData = new Date(2019, 1, 3, 12, 0, 30);
console.log(novaData.toString());
const novaData2 = new Date('2021-03-01T20:00:00');
console.log(novaData2.toString());
console.log(`Dia da semana ${novaData2.getDay()}`);//0->domingo, 6->sábado
console.log(`O dia é ${novaData2.getDate()}`);
console.log(`O mês é ${novaData2.getMonth()+1}`);//Mês começa do 0
console.log(`O ano é ${novaData2.getFullYear()}`);
console.log(`A hora é ${novaData2.getHours()}`);
console.log(`Os minutos ${novaData2.getMinutes()}`);
console.log(`Os segundos ${novaData2.getUTCSeconds()}`);
console.log(`Os milèssegundos ${novaData2.getUTCMilliseconds()}`);

function manda0(num){
    return num>=10 ? num :`0${num}`;
}
function formataData(data){
    const ano= data.getFullYear();
    const mes= manda0(data.getMonth());
    const dia= manda0(data.getDate());
    const hora = manda0(data.getHours());
    const minuto = manda0(data.getMinutes())
    const segundo = manda0(data.getSeconds());
    return `${ano}/${mes}/${dia} ${hora}:${minuto}:${segundo}`;
}
const data= new Date();
const recebe =formataData(data);
console.log(recebe);