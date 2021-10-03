/* 
A precedência dos operadore determina a ordem que os operadores serão processados.
operadores aritméticos: (), **, * / %, + -
operadores de atribuição: =, *= ...
para converter um dado para o tipo number: parseInt(inteiro), parseFloat(decimal), Number()
*/
let contador = 1;
contador++; //incremento
console.log(contador);
contador-=7 ; //decremento
console.log(contador);
let passo = 10;
contador += passo; //contador = contador + passo;
console.log(contador);
contador **= passo;
console.log(contador);