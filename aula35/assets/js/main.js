function meuEscopo() {
    const section = document.querySelector('section');
    const divMae = document.createElement('div');
    const elementos =[
        { tag: 'p', texto: 'frase 1' },
        { tag: 'div', texto: 'Frase 2' },
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' },
    ];
    for(i=0; i< elementos.length; i++){
        let {tag, texto}= elementos[i];
        let elementoNovo = document.createElement(tag);
        elementoNovo.innerText=texto;
        divMae.appendChild(elementoNovo);
    }
    section.appendChild(divMae);
} 
meuEscopo();