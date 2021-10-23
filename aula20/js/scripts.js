function meuEscopo() {
    const form = document.querySelector('#formm');
    const div = document.querySelector('#respostas');
    const nome = form.querySelector('#nomee');
    const sobrenome = form.querySelector('#sobrenomee');
    const peso = form.querySelector('#pesoo');
    const altura = form.querySelector('#alturaa');
    const aArray = [];

    function criaObjetos(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    }

    function objetoNaArray (evento) {
        evento.preventDefault();
        const objeto = criaObjetos(nome.value, sobrenome.value, peso.value, altura.value);
        aArray.push(objeto);
        return console.log(aArray);
    };

    function imprimeNaTela(){
        div.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p> `;     
    }

    form.addEventListener('submit', objetoNaArray);
    form.addEventListener('submit', imprimeNaTela);
}

meuEscopo();