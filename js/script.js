// //slide 24
// let nome = window.prompt("Qual o seu nome ?")

// alert( `Olá ${nome}!, sejá bem vindo ao meu site! `)


// alert('Eu estou estudando s')

//exercicio 1 : Ao clicar no botão `btn-alterar`, altere o conteúdo do elemento `mensagem` para "Mensagem alterada com sucesso!".

const btnAlterar = document.getElementById("btn-alterar")
const altMensagem = document.getElementById("mensagem")
const btnResetar = document.getElementById("btn-resetar")
const contador = document.getElementById("contador-valor")
const btnSomar = document.getElementById("btn-somar")
const btnSubtrair = document.getElementById("btn-subtrair")
const btnTexto = document.getElementById("btn-texto")
const altTexto = document.getElementById("texto")
const tituloPrin = document.getElementById("titulo-principal")
let number = 0


btnAlterar.addEventListener("click", function () {
    altMensagem.innerText = "Mensagem alterada com sucesso!";
    tituloPrin.style.color = 'blue'
})

//exercicio 2 : Ao clicar no botão btn-resetar, restaure o texto original do elemento mensagem.
btnResetar.addEventListener("click", function () {
    altMensagem.innerText = "Clique no botão para alterar esta mensagem.";
})

//exercicio 3 : Use os botões btn-somar e btn-subtrair para aumentar ou diminuir o 
//número exibido em contador-valor.
btnSomar.addEventListener("click", function () {
    contador.textContent = number++;
})
btnSubtrair.addEventListener("click", function () {
    contador.textContent = number--;
})

//exercicio 4 :Ao clicar no botão btn-texto, altere o conteúdo de texto para "Novo conteúdo exibido!".
btnTexto.addEventListener("click", function () {
    altTexto.innerText = "Novo conteúdo exibido!";
})

