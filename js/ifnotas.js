//definindo variaveis
let nota1 = 7.5
let nota2 = 8
let nota3 = 9.5

let mediaFinal =((nota1 + nota2 + nota3)/3)

//definindo condições
if(mediaFinal >= 7){

    console.log( `A sua média é ${mediaFinal} e você está APROVADO.`)
} else if (mediaFinal < 5) {
    console.log( `A sua média é ${mediaFinal} e você está REPROVADO.`)
} else if (mediaFinal > 5 && mediaFinal < 7) {
    console.log( `A sua média é ${mediaFinal} e você está em RECUPERAÇÃO.`)
} else if (mediaFinal > 10){
    console.log( `Este valor nao esta disponivel, por favor insira notas reais.`)

}



