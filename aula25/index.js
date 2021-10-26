function meuEscopo(){
    const minhaArray =[];

    function likes(names) {
      minhaArray.push(names);
    }
    likes('ryu');
    likes('aang');
    likes('korra');
    likes('drake');
    likes('nathan');

    const tamanhoArray= minhaArray.length;
    const contador = tamanhoArray-2;
    
    if (tamanhoArray===1){
      console.log(`${minhaArray} likes this`);
    }else if(tamanhoArray===2){
        console.log(`${minhaArray[0]} and ${minhaArray[1]} like this`);
    }else if(tamanhoArray===3){
      console.log(`${minhaArray[0]}, ${minhaArray[1]} and ${minhaArray[2]} like this`);
    }else if(tamanhoArray>=4){
        console.log(`${minhaArray[0]}, ${minhaArray[1]} and ${contador} others like this`);
    }else{
        console.log(`no one like this`);
    }
    
}
meuEscopo();
