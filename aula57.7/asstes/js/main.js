function calculadora(){
    return {
        display: document.querySelector('#display'),
 
        inicia(){
            this.cliqueBotoes();
            console.log('deh');
        },
 
        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;
                console.log('e1')
                if(el.classList.contains('btn-num')){
                    console.log('e2')
                    this.btnParaDisplay(el.innerText);
                }
            })
        },
        btnParaDisplay(valor){
            this.display.value+=valor;
            console.log('e3');
        }
 
    };
 }
 const calculadoraa = calculadora();
 calculadoraa.inicia();
 console.log('aa');