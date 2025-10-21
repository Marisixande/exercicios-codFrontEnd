// Exercícios Práticos: Manipulação do DOM com `getElementsByClassName`
// ############
const paragrafoAzul = document.getElementsByClassName("paragrafo-geral");
const itemLista = document.getElementsByClassName("item-lista");
const totalLista  = document.getElementById("total-itens") ;
// const adicaoParagrafo = paragrafoAzul.push
// ############
// exercício 1: Selecione todos os elementos que possuem a classe `paragrafo-geral` e altere a cor do texto de todos eles para azul (blue).
// exercício 3 : Acesse todos os elementos com a classe `paragrafo-geral` e adicione a string " (lido)" ao final do texto de cada um deles.
for (pagrafo of paragrafoAzul) {
    pagrafo.textContent += "(lido)"
    // pagrafo.textContent = pagrafo.textContent + "(lido)"
}
// ############
// exercício 2 : Conte quantos elementos na página possuem a classe `item-lista`. Em seguida, atualize o texto do elemento com ID `total-itens` para exibir essa contagem.
totalLista.innerText = ` ${itemLista.length}`



