// DOM: Selecionando os elementos do HTML pelo ID
const elementoHorario = document.querySelector("#horario");
const elementoDataCompleta = document.querySelector("#data-completa");
const elementoDia = document.querySelector("#dia");
const elementoMes = document.querySelector("#mes");
const elementoAno = document.querySelector("#ano");
const elementoSaudacao = document.querySelector("#saudacao");

function relogio() {
    let hoje = new Date();

    // Pegando hora, minuto e segundo
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();

    // Pegando dia, mês e ano
    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1; // +1 porque os meses no JS começam em 0
    let ano = hoje.getFullYear();

    // Adicionando o "0" na frente de números menores que 10
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    if (dia < 10) { dia = "0" + dia; }
    if (mes < 10) { mes = "0" + mes; }

    // Atualizando as horas e datas na tela
    elementoHorario.textContent = h + ":" + m + ":" + s;
    elementoDataCompleta.textContent = dia + "/" + mes + "/" + ano;
    elementoDia.textContent = dia;
    elementoMes.textContent = mes;
    elementoAno.textContent = ano;

    // Atualizando a mensagem de saudação
    if (h >= 5 && h < 12) {
        elementoSaudacao.textContent = "BOM DIA!";
    } else if (h >= 12 && h < 18) {
        elementoSaudacao.textContent = "BOA TARDE!";
    } else {
        elementoSaudacao.textContent = "BOA NOITE!";
    }
}

// Atualiza o relógio a cada 1 segundo (1000 milissegundos)
setInterval(relogio, 1000);

// Executa assim que a página abre para não esperar 1 segundo
relogio();