let chave = "bf1871a17ffcf283be6d3e64e62acef5"

function tela (dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade relativa " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscar(cidade){
    let dados = await fetch (
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())

        tela(dados)
    }


function clique(){
    let cidade = document.querySelector(".input-cidade").value

buscar(cidade)}


