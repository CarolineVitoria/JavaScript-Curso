/*
&& -> false && true -> retorna false(valor)
|| -> false || true -> retorna true(valor)

FALSY: false, null, undefined, ''(string vazia), 0 E NaN.
 */

function falaOi (){
    return 'oi';
}
const vaiExecutar = 1;
console.log(vaiExecutar && falaOi());

console.log(null || 0 || 'gravity' || 'rush');

//ao invés de fazer toda uma estrutura condicional posso usar o curto circuito
const corUsuario = 'vermelho';
const corPadrao = 'preto';
console.log(corUsuario || corPadrao);