import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDataSpecies, setPokemonSpeciesData] = useState();
  const match = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpeciesData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BrowserRouter>
        {pokemonData && (
          <div className="pokemon-page__wrapper">
            <div>
              <img
                src={pokemonData.sprites.other.dream_world.front_default}
                width="250"
                height="auto"
                alt={pokemonData.name + " image"}
              />
            </div>
            <div className="pokemon-page__right-box">
              <div className="pokemon-page__sub-pages">
                <Link to={`${match.url}`} className="sub-pages__active">
                  About
                </Link>
                <Link
                  to={`${match.url}/more`}
                  className="sub-pages__non-active"
                >
                  Evolution
                </Link>
              </div>

              <Switch>
                <Route exact path={`${match.path}`}>
                  <div className="pokemon-page__about">
                    <div className="about__column">
                      <div>Id</div>
                      <div>Name</div>
                      <div>Height</div>
                      <div>Weight</div>
                      <div>Abilities</div>
                    </div>
                    <div className="about__column">
                      <div>{pokemonData.id}</div>
                      <div>{pokemonData.name}</div>
                      <div>{pokemonData.height}</div>
                      <div>{pokemonData.weight}</div>
                      <div>
                        {pokemonData.abilities.map((item, index) => (
                          <span>
                            {item.ability.name}
                            {index === pokemonData.abilities.length - 1
                              ? ""
                              : ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path={`${match.path}/more`}>
                  <div>MORE PAGE</div>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}
