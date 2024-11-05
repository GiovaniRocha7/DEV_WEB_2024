// VARIAVEIS >>> var nome;
//  FUNÇÕES >>> function NomeAluno(){}

// Funções
function Contador(){
    // criar uma verificação de se o número digitado é par ou impar
    let imparPar = 9;
    let numero = 1;
    // Se for impar emtão vamos apresentar na tela todos os números impares de 1 até 50
    if(imparPar % 2 ==1){
        console.log("Esse número é impar")
        for(numero; numero  <= 50; numero++){
            if(numero % 2 === 1){
                console.log(numero)
            }
        }
    }else if(imparPar % 2 == 0){
    // Senão (se for par) vamos apresentar natela todos os números pares de 1 até 50
    console.log("Esse número é par")
    for(numero; numero  <= 50; numero++){
        if(numero % 2 === 0){
            console.log(numero)
        }
    }

}

// OBS:FUNÇÕES SÃO SEMPRE CHAMADAS ACOMPANHADAS COM APARENTES
console.log(Contador())

console.clear()

// Arrow Fuunction 

let BoasVindas = () => {
return 'Welcome com JS / Com tcc'

}
console.log(BoasVindas())

// OS PARETESES SÃO PARA TRAZER VALORES QUE ESTÃO FORA SA FUNÇÃO PARA DENTRO DELA ASSIM CINSEGUINDO TRABALHAR COM VARIOS TIPOS DE VALORES INFORMAÇÕES PELO USUARIO

let Soma = (num1 = num2) => {
    return num1 + num2
}

console.log(Soma(7,5))

console.clear()

function Clique(){
    let cliques = 0;

    return cliques++;
}

console.log(Clique())

let ChamaPopUp = () => {
    alert
}