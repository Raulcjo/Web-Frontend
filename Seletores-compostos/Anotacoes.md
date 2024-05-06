- [] Pesquisar melhor o que é o DOM 
- [] Pesquisar como funciona o flex em geral
- Dúvidas sobre pseudo-classes consultar http://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes
- https://caniuse.com

# Seletores compostos (CSS):

<article> 
    <h3> </h3>
    <p>
        <a><b> </b></a>
    </p>
    <p>
        <a><b> </b></a>
    </p>
    <p>
        <a><b> </b></a>
    </p>
</article>

- Seleção por decendência:

article a{ 
    background: red;
}

> Seleciona todas as tags escolhidas que são decendentes da tag anterior


- Seleção por filho direto:

article p > b{
    background: red;
}

> Seleciona todas as tags que são filhas diretas da tag anterior, caso
não exista nenhuma, nada será selecionado

- Seleção por irmão adjacente:

article h3 + p{
    background: red;
}

> Seleciona a tag que é vem imediatamente após a tag anterior e somente se for a escolhida no seletor

- Selecão por irmãos próximos:

article h3 ~ p{
    background: red;
}

> Seleciona todos as tags escolhidas que vem após a tag anterior escolhida no seletor

# Seletores de atributos (CSS):

- Seleção de atributo

a[title]{
    color: red;
}

> Selciona a tag com o atributo especificado

- Seleção de atributo com valor específico:

img[alt=""]{
    border-color: red;
}

> Seleciona a tag com um atributo de um valor específico

- Seleção de atributo com valor específico e começo:

a[href^=http]{
    color: red;
}

> Seleciona toda tag que possui um atributo específico e que começe com o valor especificado

- Seleção de atributo com valor específico no final: 

img[src$=".png"]{
    border-color: red;
}

> Seleciona toda tag que possui um atributo específico e que termine com o valor especificado

- :not():

*exemplos:* 
:not(a){..;} ; p:not(.destaque){..;} ; img:not([alt]){ display: none }

> Selecionando toda tag que não possui o algo especificado

