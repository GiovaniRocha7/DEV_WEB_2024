let URL =  "https://viacep.com.br/ws/01001000/json/"

async function BuscaCep(){
    let resp = await fetch(URL).then((Response)) =>{

        return Response.json();
    }).then((Response)) => {
        document.getElementById('Cep').value =
        Response.cep;
    }

    // let exemplo = resp.json();

    // console.log(exemplo);
}

BuscaCep();