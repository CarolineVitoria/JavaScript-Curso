function meuEscopo(){
    const paragrafo = document.querySelector('#paragrafo');
    const data = new Date();
    const nomeMes =['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const nomeSemana=['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    function add0(num){
        return num>=10 ? num : `0${num}`;
    }
    function dataAtual(){
        const ano = data.getFullYear();
        const mes = data.getMonth();
        const dia = data.getDate();
        const hora = add0(data.getHours());
        const minuto = add0(data.getMinutes());
        const diaSemana = data.getDay();
        const arrayData =[ano, mes, dia, hora, minuto, diaSemana];
        return arrayData;
    }
    function escrever(){
        paragrafo.innerHTML = `${nomeSemana[recebeData[5]]}, ${recebeData[2]} de ${nomeMes[recebeData[1]]} de ${recebeData[0]}, ${recebeData[3]}:${recebeData[4]}`
    }
dataAtual();
const recebeData = dataAtual();
escrever();
}
meuEscopo();
