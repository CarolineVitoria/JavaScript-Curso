function calculadora(){
    return {
        display: document.querySelector('#display'),
 
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            document.addEventListener('keypress', e =>{
                if(e.key==='Enter'){
                    this.conta();
                }
            });
        },
        limparTudo(){
            this.display.value='';
        },
        apagarUm(){
            this.display.value= this.display.value.slice(0, -1);
        },
        conta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta){
                    alert('conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch(e){
                alert('conta inválida');
                return;
            }
        },
        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;
                console.log('e1')
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-c')){
                    this.limparTudo();
                }
                if(el.classList.contains('btn-apagar1')){
                    this.apagarUm();
                }
                if(el.classList.contains('btn-igual')){
                    this.conta();
                }
                this.display.focus();
            });
        },
        btnParaDisplay(valor){
            this.display.value+=valor;
        }
    };
 }
 const calculadoraa = calculadora();
 calculadoraa.inicia();
 console.log('aa');