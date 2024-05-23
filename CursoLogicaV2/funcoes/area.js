function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaRetangulo aceitas dois parâmetros do tipo number")
    }
    return l * a;
}

function calcularAreaTriangulo(b, a){
    if(typeof b !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaTriangulo aceitas dois parâmetros do tipo number")
    }
    return b * a / 2;
}

function calcularAreaCirculo(r){
    if(typeof r !== "number"){
        throw new Error("calcularAreaCirculo aceita apenqs um parâmetro do tipo number")
    }
    return Math.PI*(r**2);
}