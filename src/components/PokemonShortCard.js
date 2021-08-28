import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonShortCard({ data }) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(data.url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pokemon-card">
      {pokemonData && (
        <Link to={`/pokemon/${pokemonData.id}`}>
          {/* <div>
            <span>Name: </span>
            {data.name}
          </div> */}
          {pokemonData && (
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              width="100"
              height="100"
              alt={pokemonData.name}
            />
          )}
        </Link>
      )}
    </div>
  );
}
