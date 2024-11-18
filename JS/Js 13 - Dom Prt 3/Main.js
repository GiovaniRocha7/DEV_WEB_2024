let botão = document.querySelector('button')

let olhaNumero = true
if(olhaNumero === true){
    botão.style.color = "white"
    botão.style.backgroundColor = "green"
    botão.style.borderRadius = "5px"
    botão.innerHTML = "Cadastro"
}else{
    botão.style.color="red"
}
let paragrafo = document.querySelector('#paragrafo')
paragrafo.style.backgroudImage = 'linear-gradient(blue,red)'
paragrafo.style.color ="white"