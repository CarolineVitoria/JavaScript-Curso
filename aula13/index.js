let umaString = "Vai Corinthians"

//Caractere de escape: \

console.log(umaString.charAt(4)); //para acessar um caractere que está em um determinado índice
console.log(umaString.length); //para saber o tamanho da string
console.log(umaString.indexOf('Corinthians')); //para saber o índice de um determinado caractere, ou o índice de onde começa uma palavra
console.log(umaString.indexOf('a', 3)) //o índice da letra 'a' depois do índice '3'
console.log(umaString.slice(0,3)); //retorna uma parte de uma string a partir dos índices
console.log(umaString.slice(-11)); //vai retornar os caracteres a partir do tamanho da string menos o valor'11'
console.log(umaString.replace(' ', ' meu ')); //substituir uma palavra/caractere por outro
console.log(umaString.toUpperCase()); //para deixar a string em maiúcula
console.log(umaString.toLowerCase()); //para deixar em minúscula