(function (){  
    const sNome='spider';
    function criaNome(nome){
        return nome + ' ' + sNome;
    }
    function falaNome(){
        console.log(criaNome('peter'));
    }
    falaNome();
})();
