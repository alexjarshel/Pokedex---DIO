const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const list = fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemonList) =>{
 console.log(pokemonList[0])})

.catch((error) => console.error(error))

console.log(list)

