import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Pokemon page</h1>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <div>id: {pokemonData.id}</div>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            width="250"
            height="auto"
            alt={pokemonData.name}
          />
        </div>
      )}
    </>
  );
}
