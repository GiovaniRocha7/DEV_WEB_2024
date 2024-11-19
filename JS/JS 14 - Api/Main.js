let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // faço a consulta na API e retorno o JSON na variavel respo
    let resp = await fetch(URL)

    // pegar o retorno em JSON e tranformar em um OBJETO
    let exemplo = resp.json();
    console.log(resp);
}

DogApi()

