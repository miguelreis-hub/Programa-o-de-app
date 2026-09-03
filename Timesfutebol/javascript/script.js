// DOOM vai mostrar para o javascript quais sao os objetos que vamos manipular por meio do id

const alvo = document.querySelector("#alvo")
const bahia = document.querySelector("#bahia")
const vitoria = document.querySelector("#vitoria")
const real = document.querySelector("#real")
const barcelona = document.querySelector("#barcelona")
const munich = document.querySelector("#munich")

//evento quais teclas vão realizar ação ou quais teclas o usuario vai ter que apertar para realizar uma ação

bahia.addEventListener("click",bahea)
vitoria.addEventListener("click",vice)
real.addEventListener("click",madrid)
barcelona.addEventListener("click",varca)
munich.addEventListener("click",bayern)


//ação apos o evento as acões que irao seres realizados apos a interação do usuario como por exemplo o click

function bahea(){
    alvo.src = "image/bahia.png"
}

function vice(){
    alvo.src = "image/vitoria.webp"
}

function madrid(){
    alvo.src = "image/Madrid.webp"
}

function varca(){
    alvo.src = "image/barcelona.webp"
}

function bayern(){
    alvo.src = "image/bayern.jpg"
}