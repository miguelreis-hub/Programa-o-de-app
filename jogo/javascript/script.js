//DOOM

const boneco = document.querySelector("#boneco")
posicao = 0

//Evento o que voçe faz para aconter alguma coisa do boneco

document.addEventListener("keydown",controlar)
boneco.addEventListener("animationend",parar) //ele vai parar de pular ifinitamente

//Ação

function controlar(evento){

    if(evento.key == "ArrowUp"){//controlar a tecla pra cima
        boneco.classList.add("pulando") //adicione nesse boneco a classe pulando

    }

    if(evento.key == "ArrowRight" & posicao<600){
        
        posicao = posicao + 10
    }

    boneco.sytle .
    
}

function parar(){
    boneco.classList.remove("pulando")
}