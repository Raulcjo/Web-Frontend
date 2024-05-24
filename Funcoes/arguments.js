function somar(){
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(somar.name) //Mostra o nome da funcão

// const somar = () => { //Não utilize arguments com arrow functions
//     console.log(arguments)
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3, 4, 5));
console.log(somar(1, 2, 3, 4, 5, 6));