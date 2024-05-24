function calcularIMC(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: weight and height")
    }
    let imc = peso / (altura**2);
    if(typeof callback === "function"){
        return callback(imc);
    }
    return imc;
}

function classificaIMC(imc){
    if(imc <= 16.9){
        return "Muito abaixo do peso";
    }
    else if(imc <= 18.4){
        return "Abaixo do peso";
    }
    else if(imc <= 24.9){
        return "Peso normal";
    }
    else if(imc <= 29.9){
        return "Peso normal";
    }
    else if(imc <= 34.9){
        return "Obesidade I";
    }
    else if(imc <= 34.9){
        return "Obesidade II";
    }
    else if(imc <= 40){
        return "Obesidade III";
    }
}

let imc = calcularIMC(60, 1.65);
let imc2 = calcularIMC(60, 1.65, classificaIMC);
console.log(imc);
console.log(imc2);
