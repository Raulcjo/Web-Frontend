// function init(){
//     let isValid = true;
//     console.log("init modal", isValid)
// }
// init()

// Função auto-invocável - evita vazar as variáveis

(function (n1, n2, n3){
    let isValid = true
    console.log(" modal", isValid, n1, n2, n3)

    function init(){
        console.log("init do modal")
    }
    init()
})(10, 25, 38)