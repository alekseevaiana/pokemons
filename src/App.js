import "./App.css";
import React, { useEffect, useState } from "react";
import PokemonsList from "./components/PokemonsList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import Navigation from "./components/Navigation";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [offset, setOffset] = useState(0);
  // добавлять офсет
  // добавить к стейту новые данные
  useEffect(() => {
    console.log("offset in effect is " + offset);
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonsData((prev) => [...prev, ...data.results]);
      })
      .catch((error) => console.log(error));
  }, [offset]);

  // get id and pass to pokemonPage
  function handleOffsetClick() {
    setOffset(offset + 20);
  }

  function handleScroll(e) {
    console.log("scrolled", e);
    setOffset(offset + 20);
  }

  return (
    <div className="App" onScroll={handleScroll}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <PokemonsList pokemonsData={pokemonsData} />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonPage />
          </Route>
          <PokemonsList />
        </Switch>
        {/* <button onClick={handleOffsetClick}>LOAD MORE</button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
