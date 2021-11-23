function retornaData(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('inferno');
    }
    if (!data) {
        data= new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });
}
try{
    const data = retornaData(new Date('01/01/1970 18:05:06'));
    console.log(data);
}catch(erro){
    //tratar erro
}finally{
    console.log('sempre serei executado :p')
}
