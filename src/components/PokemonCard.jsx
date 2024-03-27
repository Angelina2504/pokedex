function PokemonCard () {
    let pokemon = pokemonList[1];
    return (
    <figure>
      {pokemon.imgSrc === undefined ? (
        <div><figcaption>{pokemon.name}</figcaption>
        <p>???</p>
        </div>
      ) : ( 
        <div>
          <figcaption>{pokemon.name}</figcaption>
          <img src={pokemon.imgSrc}/>
        </div>
      )}
    </figure>
    );
}

export default PokemonCard;

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
