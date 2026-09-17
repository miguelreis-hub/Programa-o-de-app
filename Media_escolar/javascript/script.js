const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const nota3 = document.querySelector("#nota3")
const botao = document.querySelector("#botao")
const media_final = document.querySelector("#media_final")
const situacao = document.querySelector("#situacao")



//evento os teclados que irao ocasionar em ação ex click , o que o usuario precisara fazer para realizar ação

botao.addEventListener("click", media)



//ação ocorre quando o evento é realizado


function media() {

    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)

    media_final_1 = ((n1 + n2) + n3) / 3

    media_final.textContent = `MEDIA: ${media_final_1}`



    if (media_final_1 >= 5) {

        situacao.textContent = `APROVADO!!!`

    } else if (media_final_1 < 5) {
        situacao.textContent = `REPROVADO!!`
    }







}