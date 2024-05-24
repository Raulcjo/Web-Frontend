let arr = [1, 3, 5, 7, 9]

let teste = arr.push(11, 13, true, "ola mundo") //Acrecenta valores no array]
console.log(teste)
console.log(arr)

let ultimoItem = arr.pop()//retira o último item do array
// let ultimoItem = arr[arr.length -1]
console.log(ultimoItem)
console.log(arr)

let primeiroItem = arr.shift()//retira o primeiro item do array
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4, 5, 6)//adiciona novos valores no começo do array
console.log(teste)
console.log(arr)

let arr2 = arr.slice(2, 4)//recorta um pedaço do array
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2, 4, "ola mundo") //retorna os elementos removidos e modifica o array original
// splice(número de partida, quantidade após o número, novas adições)
console.log(arr)
console.log(arr3)
