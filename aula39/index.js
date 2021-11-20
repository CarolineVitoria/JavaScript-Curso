function radom(max, min) {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const max = 1;
const min = 50;

let numero = radom(max, min);
numero=10;
while (numero !== 10) {
    numero = radom(max, min);
    console.log(numero);
}
console.log('#####')

do {
    numero = radom(max, min);
    console.log(numero);
} while(numero!==10);
