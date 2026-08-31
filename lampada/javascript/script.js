//Evento fala pro javascript  informando quais objetos vamos utilizar ou vamos mexer ou usar


const alvo = document.querySelector("#alvo")
const ligar = document.querySelector("#Ligar")
const desligar = document.querySelector("#Desligar")

//Evento teclas que irao realizar ação ou tecla que o usuario precisa apertar para realizar ação


ligar.addEventListener("click",on)
desligar.addEventListener("click",off)



//Ação que ira realizar apos o evento 


function on(){

    alvo.src = "image/lampada-acesa.png"

}

function off(){
    
    alvo.src = "image/lampada-apagada.png"
}