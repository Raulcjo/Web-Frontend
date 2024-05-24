// function init(){
//     let isValid = false
//     console.log("init menu", isValid)
// }
// init()

// Função auto-invocável

(function (win, doc){
    "use strict"
    let isValid = false

    function init(){
        console.log("init do menu")
    }
    init()
})(window, document)
