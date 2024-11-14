
//  VAMOS DESENVOLVER UMA TABUADA
// PEGANDO O ELEMENTO UTILIZANDO O ID
let valor = document.getElementById("recebeValor")
// pega o elemento utilizando o ATRIBUTO NAME
let resultado = document.getElementsByName("resultado")

const Tabuada = () => {
    // value - guarda o valor que está sendo digitado dentro da variavel
    let guardaValor = valor.value;
    resultado.innerHTML = ''

    if(guardaValor ==''){
        resultado.innerHTML = "Digite um valor valido"
        resultado.style.color = "red"
    }else{
        resultado.style.color = "black"
        for (i = 0; i <= 10; i++){
            let resultadoTabuada = guardaValor *i;
    
            console.log(guardaValor, 'x', i, '=' ,resultadoTabuada)
    
            resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor * i}<br/>`
        
            // inerHTML
            // console.log(guardaValor * 1);
            // console.log(guardaValor *2);
            // console.log(`o valor de ${guardarValor} x ${i} é igual a ${guardaValor *i}`);
            // console.log("Botão Clicado");

        }
    
    }
    
}    
 // limpar campos
 console.log = () => {
    resultado.innerHTML = ''
    valor.value = '';
   }



    