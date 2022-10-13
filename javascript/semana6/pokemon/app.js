const btnPokemones = document.querySelector("#get-pokemons");
const container = document.querySelector(".container");
const urlPokemons = "https://pokeapi.co/api/v2/pokemon";


btnPokemones.onclick = async function () {
    //como hacemos para que JS pueda extraer la informacion
    //de dicha
    //En JS existe la funcion "fetch" permite consumir la informacion de una url

    //Para poder hacer que fetch termine la ejecucion
    //tener que convertir nuestra funcion en async
    const respuesta = await fetch(urlPokemons);
    //console.log(respuesta);

    //lo parsea de json --> Objeto
    //siempre debemos convertir nuestros a un objeto
    //
    const data = await respuesta.json();
    console.log(data.results);
    readPokemons(data.results);

    
};
function readPokemons(pokemons) {
    console.log(pokemons);
    container.innerHTML = "";
    pokemons.forEach((pokemon, index) => {
        container.innerHTML += `<div class="movie">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png" alt="" />
            <h4>${pokemon.name}</h4>
            <p>
              ${pokemon.url}
            </p>
          </div>
        `;
      });
  }
  
  //readPokemons();