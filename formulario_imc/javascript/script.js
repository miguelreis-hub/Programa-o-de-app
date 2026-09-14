//doom vamos dizer pro javascript quais objetos vamos manipular ou as coisas do documento que vamos utilizar pelo meio do javascript trazer os cara que vão participar da brincadeira 


const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")
const resultado2 = document.querySelector("#resultado2")


//evento o que acontece quando o usuario aperta em algo ou teclas que vao realizarção ou teclas em que quando o usuario apertar vai realizar ação ou o que ele faz para gerar resultado

botao.addEventListener("click",imc)


//ação o que acontece apos os eventos que relizar ou apertar algo vai realizar a ação


function imc(){

    p = Number(peso.value)  //ele vai pegar o que esta pegando dentro da caixinha 
    a = Number(altura.value)

    peso_final = p / (a*a)

    resultado.textContent = `O seu IMC é ${peso_final.toFixed(2)}`

    if(peso_final < 18.5){
        resultado2.textContent = "voçe é magro"
    }

    else if (peso_final >=18.5 && peso_final <25) {
        resultado2.textContent = "voçe esta com o peso ideal"
    }

    else if (peso_final >=25 && peso_final <30){
        resultado2.textContent = "Voçe esta com sobre peso"
    }

    else{
        resultado2.textContent = "VOÇE ESTA COM OBESIDADE , VA PROCURAR UM MEDICO URGENTE!!!"
    }
}
