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
      {console.log("params " + params)}
      {pokemonData && (
        <div className="pokemon-page__wrapper">
          <div>
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              width="250"
              height="auto"
              alt={pokemonData.name}
            />
          </div>
          <div className="pokemon-page__right-box">
            <div className="pokemon-page__sub-pages">
              <div className="sub-pages__active">About</div>
              <div className="sub-pages__non-active">Evolution</div>
            </div>
            <div className="pokemon-page__about">
              <div className="about__column">
                <div>Id</div>
                <div>Name</div>
                <div>Species</div>
                <div>Height</div>
                <div>Weight</div>
                <div>Abilities</div>
              </div>
              <div className="about__column">
                <div>{pokemonData.id}</div>
                <div>{pokemonData.name}</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
