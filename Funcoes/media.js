(function (){
    function calcularMedia(){
        let soma = 0;
        let qtd = arguments.length
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("Only numbers")
            }
            soma += arguments[i];
        }
        return (soma / qtd) || 0;
    }
    let media = calcularMedia(1, 2, 3)
    console.log(media)
})()
 

