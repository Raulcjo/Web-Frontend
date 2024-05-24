let arr = [1, 2, 3]
// console.log(arr.reverse())//inverte a ordem do array original

let j = 0;
let soma = arr.reduce(function (acumulador, atual, i, _arr){ //reduce devolve apenas 1 número
    console.log("i :", i)
    console.log("j :", j++)
    console.log("acumulador :", acumulador, "---- atual: ", atual)
    return acumulador + atual
}, 0) //valor do acumulador
console.log(soma)
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "João"]
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesPorOrdem)

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
const numerosUnicos = [1, 3, 4, 5, 8, 9]

