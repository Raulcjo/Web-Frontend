(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p");

    if(nomeUsuario) {
        //document.querySelector(".top-bar p").textContent += nomeUsuario;
        //elemento.textContent = elemento.textContent + nomeUsuario
        //elemento.textContent += nomeUsuario; //text.Content não reconhece tags html
        console.log(elemento.textContent)
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"; //innerHTML reconhece e adiciona as tags html na visualização
    }else{
        //elemento.style.display = "none"

        //elemento.remove(); //não tem suporte para o internet explorer

        const elementoParaRemover = elemento.parentElement; 
        elementoParaRemover.parentElement.removeChild(elementoParaRemover); //funciona mas não é ideal
    }

    console.log(elemento)

    //elemento.parentElement -> seleciona o pai de elemento
    //elemento.childen -> seleciona o filho de elemento

})()