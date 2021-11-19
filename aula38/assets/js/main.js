const ps = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for(let elemento of ps){
    console.log(elemento);
    elemento.style.color= backgroundBody;
}