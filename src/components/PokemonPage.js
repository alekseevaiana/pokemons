import {
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonAboutInfo from "./PokemonAboutInfo";
import PokemonMoreInfo from "./PokemonMoreInfo";
import NotFound from "./NotFound";

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDataSpecies, setPokemonSpeciesData] = useState();
  const match = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then((response) =>
        response.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`).then(
        (response) => response.json()
      ),
    ])
      .then(([data1, data2]) => {
        setPokemonData(data1);
        setPokemonSpeciesData(data2);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, []);

  return (
    <>
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
              <Route exact path={`${match.path}/more`}>
                <PokemonMoreInfo pokemonDataSpecies={pokemonDataSpecies} />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}
