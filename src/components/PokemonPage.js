import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonAboutInfo from "./PokemonAboutInfo";
import PokemonMoreInfo from "./PokemonMoreInfo";

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDataSpecies, setPokemonSpeciesData] = useState();
  const match = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => {
        console.log("error message:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpeciesData(data))
      .catch((error) => console.log("ERROR loading species: ", error));
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
                <NavLink
                  to={`${match.url}`}
                  exact
                  className="sub-pages__non-active"
                  activeClassName="sub-pages__active"
                >
                  About
                </NavLink>
                <NavLink
                  to={`${match.url}/more`}
                  exact
                  className="sub-pages__non-active"
                  activeClassName="sub-pages__active"
                >
                  More
                </NavLink>
              </div>
              <Switch>
                <Route exact path={`${match.path}`}>
                  <PokemonAboutInfo pokemonData={pokemonData} />
                </Route>
                <Route path={`${match.path}/more`}>
                  <PokemonMoreInfo pokemonDataSpecies={pokemonDataSpecies} />
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}
