(function(){
    function calcularIMC(peso, altura){
        if(typeof peso !== "number" || typeof altura !== "number" || peso === undefined || altura === undefined){
            throw Error("Parâmetros incompativeis, verifique os parâmetros passados")
        }
        let altura2 = altura**2
        return peso / altura2
    }
    let imc = calcularIMC(75, 1.73)

    function classificaIMC(){
        if(imc < 16.9){
            return "- Muito abaixo do peso"
        }
        else if(imc <= 18.4){
            return "- Abaixo do peso"
        }
        else if(imc <= 24.9){
            return "- Peso normal"
        }
        else if(imc <= 29.9){
            return "- Acima do peso"
        }
        else if(imc <= 34.9){
            return "- Obesidade grau I"
        }
        else if(imc <= 40){
            return "- Obesidade grau II"
        }
        else if( imc > 40){
            return "- Obesidade grau III"
        }
    }
    let classe = classificaIMC(imc)

    console.log(imc, classe)
})()
 

