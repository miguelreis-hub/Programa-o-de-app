//dom manipular os objetos ou mostrar para o javascript quem vamos utilizar ou manipular  ou pegar quem vai participar do javascript


const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

//evento

setInterval(relogio,1000)

if(h<10){
    h="0"+h
}

if(m<10){
    m="0" + m
}

if (s<10){
    s = "0" +s
}


function relogio (){

    hoje = new Date()
    h = hoje.getHours()
    m = hoje.getMinutes()
    s = hoje.getSeconds()

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

}