// let media, faltas;
// media = 10
// faltas = 4
// // 6.5
// if (media >= 7 && faltas <= 5){
//     console.log(`Aluno Aprovado.`);
// } else if (media >= 6.5 && faltas <= 5) {
//     console.log(`Aluno Ap. Conselho.`);
// } else {
//     console.log(`Aluno Reprovado.`);
// }
// console.log(`Fim.`);

// ------------------MEU EX------------------------
// let imc, peso, altura;
// peso  18,5;

// altura=

// if (peso<=18,5){
//     console.log("abaixo do peso")
// }else if (peso ==18,5 e 25){
//     console.log("Peso Normal")
// } else if (peso>25){
//     console.log("Acima do Peso")

// }
// -----------------------------------------------------------
// let imc, peso, altura;

// peso = 700;

// altura = 1.90;

// imc = peso / (altura * altura);

// if (imc < 18.5) {
//     console.log(`Seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso.`);
// } else if (imc >= 18.5 && imc < 25) {
//     console.log(`Seu IMC é: ${imc.toFixed(1)} e seu peso está normal`);
// } else {
//     console.log(`Seu IMC é: ${imc.toFixed(1)} e você está acima do peso.`);
// }
// -----------------------------------------------------------
let imc, peso, altura;

peso = 700;

altura = 1.90;

imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc.toFixed(1)} e seu peso está normal`);
} else
    console.log(`Seu IMC é: ${imc.toFixed(1)} e você está acima do peso.`);
// }ta bom pra ir pra praia
//  hello
// variavel chamada valor
// cc

let valor = 2
switch (valor) {
    case 1:
        console.log(`Você foi avaliado com ótimo`);
        break;
    case 2:
        console.log(`Você foi avaliado com Bom`);
        break;
    case 3:
        console.log(`Você foi avaliado com Regular`);
        break;
    case 4:
        console.log(`Você foi avaliado com Ruim`);
        break;
    case 5:
        console.log(`Você foi avaliado com Péssimo.`);
        break;
    default:
        console.log(`Você não foi avaliado!`);
        break;
}
