const numeros = [100, 200, 300, 400, 590];
const [um, , tres, ...resto]= numeros;
console.log(um, tres, resto);
const numeros2 = [ [1, 2 ,3], [10, 20, 30]];
const [, [, , trinta]] = numeros2;
console.log(trinta);
const [lista0, lista1] = numeros2;
console.log(lista0[2], lista1[0]);