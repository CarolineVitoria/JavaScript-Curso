function pai(nome){
    return function(){
        return nome;
    }
}
const a = pai('aang');
const b = pai('katara');
console.log(a());
console.log(b());