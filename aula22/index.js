/*
Operadores lógicos
&&->and->e ->todas as expressões precisam ser verdadeiras para retornar true
||->or->ou ->Se uma expressão for verdadeira, retorna true
!->NOT->não
*/
const user = 'ryumi';
const key = 123456;
const validacao = user === "ryumi" && key === 123456;
console.log(!!validacao);