// Exercícios Práticos: Manipulação do DOM com `getElementsByClassName`
// ############
const paragrafoAzul = document.getElementsByClassName("paragrafo-geral");
const itemLista = document.getElementsByClassName("item-lista");
const totalLista = document.getElementById("total-itens");
const itemImportante = document.getElementsByClassName("paragrafo-geral item-importante")
const secaoUm = document.getElementById("secao-1")
const clikCartao = document.getElementsByClassName("cartao")
const btnAdcionar = document.getElementById("btn-adicionar")
const contCartao = document.getElementById("container-cartoes")
// ############
// exercício 1: Selecione todos os elementos que possuem a classe `paragrafo-geral` e altere a cor do texto de todos eles para azul (blue).
// exercício 3 : Acesse todos os elementos com a classe `paragrafo-geral` e adicione a string " (lido)" ao final do texto de cada um deles.
for (pagrafo of paragrafoAzul) {
    pagrafo.textContent += "(lido)"
    pagrafo.style.color = "blue";
}
// ############
// exercício 2 : Conte quantos elementos na página possuem a classe `item-lista`. Em seguida, atualize o texto do elemento com ID `total-itens` para exibir essa contagem.
totalLista.innerText = ` ${itemLista.length}`
// ############
// exercício 4: Selecione apenas os elementos que possuem simultaneamente as classes `paragrafo-geral` e `item-importante`. Adicione a estes elementos a classe `destaque`.
for (element of itemImportante) {
    element.classList.add("destaque")
}
// ############
// exercício 5 : Selecione a `section` com o ID `secao-1`. Dentro dela, encontre todos os elementos com a classe `paragrafo-geral` e adicione uma borda vermelha (`1px solid red`).
for (verm of secaoUm && paragrafoAzul) {
    verm.style.borderColor = 'red';
    verm.style.borderStyle = 'solid';
    verm.style.borderWidth = '1px';
}
// ############
// exercício 6: Encontre todos os elementos com a classe `cartao`. Adicione um evento de `click` a cada um deles que exiba um `alert("Cartão clicado!")`.
// exercício 10: Adicione eventos `mouseover` e `mouseout` aos elementos com a classe `cartao` para adicionar/remover a classe `borda-azul`.
for (cc of clikCartao) {
    cc.addEventListener("click", function () {
        alert("Cartão clicado!")
    })
    cc.addEventListener("mouseover" && "mouseout", function () {
        element.classList.toggle("borda-azul")
    })
}
// ############
// exercício 7: Para cada elemento com a classe `cartao`, leia o valor do atributo `data-produto-id` e exiba no console.
for (valor of clikCartao) {
    console.log(valor.getAttribute("data-produto-id"));
}
// ############
// exercício 8: Crie uma variável armazenando a coleção dos elementos com a classe 
// `cartao`. Imprima o tamanho no console. Depois, ao clicar no botão `btn-adicionar`, adicione um novo cartão e imprima novamente o tamanho da coleção.
console.log(clikCartao.length);
btnAdcionar.addEventListener("click", function () {
    const cartoesNovos = document.createElement("div");
    cartoesNovos.textContent = ("Produto novo");
    cartoesNovos.classList.add("cartao")
    contCartao.appendChild(cartoesNovos);
    console.log(clikCartao.length);
})
// ############
// exercício 9: Selecione todos os elementos com a classe `item-lista` e transforme o texto interno em `<em>texto</em>`.
    itemLista.innerText= ('<em>texto</em>');
// ############
