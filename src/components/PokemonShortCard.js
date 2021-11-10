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
          {pokemonData && (
            <>
              <div className="pokemon-card__image">
                <img
                  src={pokemonData.sprites.other.dream_world.front_default}
                  width="84"
                  height="84"
                  alt={pokemonData.name}
                />
              </div>
              <div className="pokemon-card__id">{pokemonData.id}</div>
              <div className="pokemon-card__name pokemon-card__text-box">
                {pokemonData.name}
              </div>
              <ul className="pokemon-card__char pokemon-card__text-box">
                {pokemonData.abilities.map((item, index) => (
                  <li key={item.ability.name}>
                    {item.ability.name}
                    {index === pokemonData.abilities.length - 1 ? "" : ", "}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Link>
      )}
    </div>
  );
}
