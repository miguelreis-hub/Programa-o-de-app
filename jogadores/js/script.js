//Doom informar quem vai participar da brincadeira , ou controlar os objetos

const alvo = document.querySelector("#alvo")
const btyamal = document.querySelector("#bt1")
const btcr7 = document.querySelector("#bt2")
const btmessi = document.querySelector("#bt3")


//Evento para os tres botões

btyamal.addEventListener("click",yamal) //ao clicar chama a função yamal
btcr7.addEventListener("click",cr7)
btmessi.addEventListener("click",messi)


//Ação o que vai aconter quando apertar o botao

function yamal(){

    alvo.src = "image/yamal.jpg"
    
}

function cr7(){
    alvo.src = "image/cr7.jpg"

}

function messi (){
    alvo.src = "image/ladrao.jpg"
}

