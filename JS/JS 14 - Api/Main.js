let URL = 'https://dog.ceo/api/breeds/image/random'

const dogApi = async () =>{
    // faço a consulta na API e retorno o JSON na variavel respo
    let resp = await fetch(URL)

    // pegar o retorno em JSON e tranformar em um OBJETO
    let exemplo = resp.json();
    console.log(resp);
}

const dogapi= async() =>{


}

