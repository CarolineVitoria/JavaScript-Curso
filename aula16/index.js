const times =['Corinthians', 'Flamengo', 'América RN', [1, 2, 3]];
console.log(times);
console.log(times.length); //tamanho da array
console.log(times[2]); //acessa um determinado elemento
console.log(times[3][0]); // acessa um item de uma array que está dentro de outra
times[1] = 'Botafogo'; //muda o valor de um item 
console.log(times);
times[4] = 'Santos'; //Adiciona mais um elemento no fim da array
times.push('ABC'); //função para adicionar no fim da array
times.unshift('Vasco'); //função para adicionar item no início da array
console.log(times);
times.pop();//remove elemento do final
times.shift();//remove o elemento do começo
delete times[3]; //remove um elemento sem alterar o índice dos outros
console.log(times);
console.log(times.slice(0, 2)); //pega elementos de uma array pelos índices


