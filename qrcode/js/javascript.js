//Doom
const botao = document.querySelector("#botao")
const qrcode = document.querySelector("#qrcode")
const entrada = document.querySelector("#entrada")


//Evento

botao.addEventListener("click",gerar)



//Ação

function gerar(){

    texto = entrada.value
    qrcode.innerHTML = ""
    new QRCode(qrcode,{

        text:texto,
        width:300,
        height:300,
    })
}
