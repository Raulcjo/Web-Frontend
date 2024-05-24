//Como clonar o array com o método concat()

let arr1 = ["a", "b", "c"]
let arr2 = [].concat(arr1) //faz isso
arr2[arr2.length] = "novo valor"

console.log(arr1)
console.log(arr2)