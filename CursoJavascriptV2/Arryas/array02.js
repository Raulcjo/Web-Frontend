let arr =  [4, 5, 10, 20, 35]
// console.log(arr.lastIndexOf(5))
console.log(arr.indexOf(5))
console.log(arr.includes(5))
//É possível conseguir mesmo efeito entre os três, só é preciso fazer algumas alterações

console.log(arr.find(function(el) {
    return el > 1000;
}))

console.log(arr.findIndex(function(el){
    return el > 10;
}))

console.log()
