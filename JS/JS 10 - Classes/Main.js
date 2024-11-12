class Aluno {
    constructor(nome, idade, altura, isCracha, isCamisa, cor){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.isCracha = isCracha
        this.isCamisa = isCamisa
        this.cor = cor
    }
}
    
let aluno1 = new Aluno("Manasses", 27, 1.90, true, true,"Black");
console.log(aluno1);

// INSTANCIA COPIAS
let aluno2 = new Aluno("Jeferson", 19, 1.75
, true, true, "AllWithe")

console.log(aluno1)
console.log(aluno2)
