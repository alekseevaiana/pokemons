import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import PokemonsList from "./components/PokemonsList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import Navigation from "./components/Navigation";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [offset, setOffset] = useState(0);
  const appEl = useRef();

  useEffect(() => {
    console.log("offset in effect is [" + offset + "]");
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonsData((prev) => [...prev, ...data.results]);
      })
      .catch((error) => console.log(error));
  }, [offset]);

  useEffect(() => {
    if (appEl.current.children[1].scrollHeight < appEl.current.clientHeight) {
      setOffset(offset + 20);
    }
  }, [pokemonsData]);

  function handleScroll(e) {
    let scrollHeight = e.target.scrollHeight;
    let scrollTop = e.target.scrollTop;
    let clientHeight = e.target.clientHeight;
    if (scrollHeight - scrollTop === clientHeight) {
      setOffset(offset + 20);
    }
  }

  return (
    <div className="App" onScroll={handleScroll} ref={appEl}>
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
