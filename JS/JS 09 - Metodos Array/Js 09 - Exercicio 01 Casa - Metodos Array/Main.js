let numeros = [17, 43, 8, 4, 97, 56, 29, 95];
function ImparPar(numero) {
    if (numero % 2 === 0){
        console.log(`${numero} é Impar`);
    } else{
        console.log(`${numero} é Par`);        
    }
}
numeros.forEach(ImparPar);