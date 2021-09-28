import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import PokemonsList from "./components/PokemonsList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import Navigation from "./components/Navigation";
import Input from "./components/Input";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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
    //const pokemonsListEl = document.getElementsByClassName("pokemons-list");
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

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App" onScroll={handleScroll} ref={appEl}>
      <BrowserRouter>
        <div className="page_header container">
          <Navigation />
          <Input
            type="text"
            name="search"
            onChange={handleSearchChange}
            placeholder="Search by name"
            className="search"
            value={searchValue}
          />
        </div>
        <Switch>
          <Route exact path="/">
            <PokemonsList
              pokemonsData={pokemonsData}
              searchValue={searchValue}
            />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
