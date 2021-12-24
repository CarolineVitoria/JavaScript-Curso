function randomN(min=1000, max=3000){
    const aleatN= Math.random() * (max - min) + min;
    return Math.floor(aleatN);
}
const nR = randomN();

function imprimi1(callback){ //se eu precisar executar uma coisa depois de executar essa função, eu preciso executar o callback
    setTimeout(function() {
        console.log('vamos estudar');
        if(callback) callback();
    }, randomN()); 
}
function imprimi2(callback){
    setTimeout(function() {
        console.log('web');
        if(callback) callback();
    }, randomN()); 
}
function imprimi3(callback){
    setTimeout(function() {
        console.log('e redes');
        if(callback) callback();
    }, randomN()); 
}
/*    imprimi1(function(){
        imprimi2(function(){
            imprimi3()
        })
    }); */

imprimi1(i1calback);
function i1calback(){
    imprimi2(i2calback);
}
function i2calback(){
    imprimi3();
}
