function falarOi(){
    console.log('oi');
}
//first-class objects(objetos de primeria clsse)
//function expression
const souUmDado= function(){
    console.log('Saudação');
}
//arrow function
const funcaoArrow = (funcao1, funcao2, funcao3) => {
    console.log('vai dar certo?')
    funcao1();
    funcao2();
    funcao3.falar();
};
const obj = {
    falar(){
        console.log('função dentro de um obj');
    }
}
funcaoArrow(souUmDado, falarOi, obj);