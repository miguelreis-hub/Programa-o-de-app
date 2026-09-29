//DOOM coisas do documento que ira participar da brincadeira ou o que javascript ira manipular

capa = document.querySelector("#capas")
sinopse = document.querySelector("#sinopse")
bt1 = document.querySelector("#bt1")
bt2 = document.querySelector("#bt2")
bt3 = document.querySelector("#bt3")
bt4 = document.querySelector("#bt4")
bt5 = document.querySelector("#bt5")



// EVENTO o que acontece se o usuario clicar ou o que precisa apertar para resultar em ação 

// alt + shift duplica linha

bt1.addEventListener("click",v1)
bt2.addEventListener("click",v2)
bt3.addEventListener("click",v3)
bt4.addEventListener("click",v4)
bt5.addEventListener("click",v5)


//AÇÂO


function v1(){

    capa.src = "image/Vingadores_1.jpg"
    
    sinopse.textContent = `Em Os Vingadores (2012), a Terra enfrenta sua maior ameaça quando Loki, o irmão de Thor, rouba o Tesseract com o plano de liderar uma invasão alienígena e escravizar a humanidade.
Para evitar a destruição do planeta, Nick Fury, o diretor da agência de espionagem S.H.I.E.L.D., decide reativar a "Iniciativa Vingadores". Ele recruta um grupo extraordinário de indivíduos: o bilionário de armadura Homem de Ferro, o supersoldado Capitão América, o deus do trovão Thor, o cientista que se transforma no incrível Hulk, e os espiões de elite Viúva Negra e Gavião Arqueiro.
Apesar das personalidades infladas e das desavenças iniciais que quase dividem o grupo, eles precisam aprender a trabalhar em equipe. Unidos pelo sacrifício de um aliado comum, os heróis se juntam na épica Batalha de Nova York para fechar o portal espacial e salvar o mundo, consagrando-se como os Vingadores.`

}
function v2(){

    capa.src = "image/Vingadores_2.jpg"

    sinopse.textContent = `Em Vingadores: Era de Ultron (2015), Tony Stark tenta construir um sistema de inteligência artificial voltado para a paz mundial, mas o projeto foge do controle e dá origem a Ultron, uma inteligência artificial que decide salvar a Terra erradicando a humanidade.
Para deter essa ameaça global de extinção, os heróis mais poderosos da Terra precisam se reunir novamente. A equipe enfrenta não apenas o exército robótico de Ultron, mas também os aprimorados irmãos Wanda e Pietro Maximoff (Feiticeira Escarlate e Mercúrio), cujos poderes manipulam a mente e a velocidade dos heróis.
Assolados por alucinações e conflitos internos, os Vingadores precisam se reestruturar emocionalmente. Com a ajuda de uma nova e poderosa entidade biomecânica conhecida como Visão, eles partem para um confronto final devastador na cidade voadora de Sokovia para salvar o que restou do planeta`

}
function v3(){

    capa.src = "image/Vingadores_3.jpg"

    sinopse.textContent = `Em Vingadores: Guerra Infinita (2018), o universo enfrenta seu maior perigo com a chegada de Thanos, um tirano intergaláctico determinado a reunir as seis Joias do Infinito para exterminar metade de toda a vida no universo sob a justificativa de equilibrar os recursos cósmicos.
Divididos após os eventos de seus conflitos anteriores, os Vingadores sobreviventes precisam deixar as diferenças de lado e espalhar suas defesas pela galáxia. Enquanto o Homem de Ferro, o Homem-Aranha e o Doutor Estranho levam o combate ao espaço ao lado dos Guardiões da Galáxia, o Capitão América lidera uma resistência desesperada na Terra, unindo forças com o exército de Wakanda comandado pelo Pantera Negra.
O confronto exige sacrifícios inimagináveis de todos os lados. Mesmo com a união de dezenas de super-heróis em múltiplos planetas, a força esmagadora de Thanos e de sua Ordem Negra empurra a humanidade para o limite, culminando em um desfecho impactante que muda o destino do universo para sempre.
`

}
function v4(){

    capa.src = "image/Vingadores_4.jpg"

    sinopse.textContent = `Em Vingadores: Ultimato (2019), o universo está em ruínas após o estalar de dedos de Thanos dizimar metade de toda a vida cósmica. Cinco anos depois da tragédia, os heróis sobreviventes carregam o peso do luto e do fracasso, até que uma inesperada teoria sobre viagens no tempo reacende uma última chama de esperança.
Liderados pelo Capitão América, pela Viúva Negra e por um relutante Homem de Ferro, os Vingadores se reúnem com aliados remanescentes — incluindo o Homem-Formiga, Nebulosa, Rocket Raccoon e a Capitã Marvel. Juntos, eles elaboram um plano audacioso batizado de "Assalto no Tempo", viajando para diferentes épocas do passado para recuperar as Joias do Infinito antes que Thanos consiga encontrá-las.
A missão exige sacrifícios devastadores e os força a reviver momentos dolorosos de suas próprias histórias. O plano culmina no maior confronto cinematográfico da Marvel, onde o destino de toda a realidade é decidido em um embate épico e definitivo contra as forças do Titã Louco.
`


}
function v5(){

    capa.src = "image/Vingadores_5.jpg"

    sinopse.textContent = `Vingadores: Doutor Destino (Avengers: Doomsday) coloca o Multiverso em uma crise em cascata sem precedentes. Três universos distintos — a linha do tempo principal do MCU, o universo do Quarteto Fantástico e a realidade dos X-Men — entram em uma rota de colisão mortal.   Diante dessa ameaça existencial, os Heróis Mais Poderosos da Terra precisam somar forças a aliados de diferentes dimensões para conter o avanço devastador de Victor von Doom / Doutor Destino (interpretado por Robert Downey Jr.), um mestre da ciência de ponta e das artes místicas disposto a reescrever o destino de toda a existência.   `

}