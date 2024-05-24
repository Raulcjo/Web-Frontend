const arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.some(function(el){ 
    return typeof el === "number" && el > 20;
})

let arr1 = arr.filter( function(el, i, _arr){
    return typeof el === "number"
})

arr.forEach(function(el, i, _arr){ //Não tem retorno o método forEach()
    console.log(i, ":", el)
})

let arr2 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr);
console.log(arr1);
console.log(arr2);

// * Todos usam o retorno de callback 
// every() - verifica se todos os elementos são iguais ou seguem o padrão
// some() - se ao menos um dos elementos corresponder ao padrão, então vai devolver "true"
// filter() - retrna um array com os valores filtrados
// forEach() - quando quizer fazer iteração no array ou verificar algo
// map() - utilizado par tranforma uma array