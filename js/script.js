// //slide 24
// let nome = window.prompt("Qual o seu nome ?")

// alert( `Olá ${nome}!, sejá bem vindo ao meu site! `)


// alert('Eu estou estudando s')

//exercicio 1 : Ao clicar no botão `btn-alterar`, altere o conteúdo do elemento `mensagem` para "Mensagem alterada com sucesso!".
document.body.style.backgroundColor = "gray"

const btnAlterar = document.getElementById("btn-alterar")
const altMensagem = document.getElementById("mensagem")
const btnResetar = document.getElementById("btn-resetar")
const contador = document.getElementById("contador-valor")
const btnSomar = document.getElementById("btn-somar")
const btnSubtrair = document.getElementById("btn-subtrair")
const btnTexto = document.getElementById("btn-texto")
const altTexto = document.getElementById("texto")
const tituloPrin = document.getElementById("titulo-principal")
const btnEnviar = document.getElementById("btn-enviar")
const resultado = document.getElementById("resultado")
let campNome = document.getElementById("campo-nome")
const btnCor = document.getElementById("btn-mudar-cor")
const cores = document.getElementById("cores")
let number = 0
const btnToggleMsg = document.getElementById("btn-toggle-msg")
const corAtual = document.getElementById("cor-atual")



btnAlterar.addEventListener("click", function () {
    altMensagem.innerText = "Mensagem alterada com sucesso!";
    //exercicio 5 : Ao clicar no botão btn-alterar, altere a cor do texto do elemento titulo-principal para azul.
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

//exercicio 4 : Ao clicar no botão btn-texto, altere o conteúdo de texto para "Novo conteúdo exibido!".
btnTexto.addEventListener("click", function () {
    altTexto.innerText = "Novo conteúdo exibido!";
})

//exercicio 6 : o clicar no botão btn-enviar, exiba o texto "Olá, [nome digitado]!" dentro do elemento resultado.
//exercicio 7 : Se o campo campo-nome estiver vazio e o usuário clicar em btn-enviar, exiba "Campo obrigatório!" em vermelho (erro).
btnEnviar.addEventListener("click", function () {
    if (campNome.value === '') {
        resultado.style.color = 'red'
        resultado.innerText = "Campo obrigatório!";
    } else {
        resultado.style.color = 'black'
        resultado.innerText = `Olá, ${campNome.value}!`;
    }

})

//exercicio 8 : Ao clicar no botão btn-mudar-cor, alterne a cor de fundo do elemento cores entre amarelo e branco.
//exercicio 10 : Quando a cor de fundo for alterada (no exercício 8),
// atualize o texto do elemento cor-atual para refletir a nova cor.
btnCor.addEventListener("click", function () {
    if (cores.style.backgroundColor === 'yellow') {
        cores.style.backgroundColor = 'white'
     corAtual.innerText = "Cor atual: Branco"
    } else if (cores.style.backgroundColor === 'white') {
        cores.style.backgroundColor = 'yellow'
        corAtual.innerText = "Cor atual: Amarelo"
    } else {
        corAtual.innerText = "Cor atual: Amarelo"
        cores.style.backgroundColor = 'yellow'

    }
})

//exercicio 9 : Adicione um botão com ID btn-toggle-msg que oculte ou mostre o elemento mensagem ao ser clicado.
btnToggleMsg.addEventListener("click", function () {
    if (altMensagem.style.visibility === "visible") {
        altMensagem.style.visibility = "hidden"
    } else if (altMensagem.style.visibility === "hidden") {
        altMensagem.style.visibility = "visible"
    } else {
        altMensagem.style.visibility = "hidden"
    }
})



