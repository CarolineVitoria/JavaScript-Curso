//  quer que o A aponte para o valor de B, B tenha o valor de C e o C de A
let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a

let varBtemp = varB;

varB = varC;
varC = varA;
varA = varBtemp;


console.log(varA, varB, varC);
//outra forma seria usando [varA, varB, varC] =  [varB, varC, varA];