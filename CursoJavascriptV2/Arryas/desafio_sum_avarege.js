//função sum() deve retornar a soma dos elementos passados
//função avarege() deve retornar a média dos elementos passados

function sum(){
    const numbers = Array.from(arguments)
    // cosnt numbers = [...arguments]
    console.log(numbers)
    console.log(numbers.reduce)
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}

function avarege(){
    return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5, 6)
console.log(soma)

let media = avarege(1, 2, 3, 4, 5)
console.log(media)