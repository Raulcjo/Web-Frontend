let arr1 = [1,2,3]
let arr2 = [5,6,7]

console.log(arr1.toString()) //mostra os valores de array como strings
console.log(arr1.join(" - ")) //também retorna string, mas pode receber um carácter para separar os valores 
let arr3 = arr1.concat(arr2, 4, 8, 9, 10, ["olá", "mundo"]) //concat() serve para juntar arrays

console.log(arr1)
console.log(arr2)
console.log(arr3)


