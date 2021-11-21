const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let elemento of numeros){
    if(elemento==8){
        console.log('chegamos ao número 8')
        continue;
    }
    if(elemento==9){
        break;
    }
    console.log(elemento);
}
//continue-> continua para a próxima iteração
// break -> sai do laço