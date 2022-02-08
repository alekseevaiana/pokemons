import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import PokemonsList from "./components/PokemonsList";
import { Switch, Route, HashRouter } from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import Navigation from "./components/Navigation";
import Input from "./components/Input";
import NotFound from "./components/NotFound";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [offset, setOffset] = useState(0);

  const appEl = useRef();
  const [listEl, setListEl] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonsData((prev) => [...prev, ...data.results]);
      })
      .catch((error) => console.log(error));
  }, [offset]);

  useEffect(() => {
    if (listEl && listEl.scrollHeight < appEl.current.clientHeight) {
      setOffset((offset) => offset + 20);
    }
  }, [pokemonsData, listEl]);

  function handleScroll(e) {
    let scrollHeight = e.target.scrollHeight;
    let scrollTop = e.target.scrollTop;
    let clientHeight = e.target.clientHeight;
    if (scrollHeight - scrollTop === clientHeight) {
      setOffset((offset) => offset + 20);
    }
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App" onScroll={handleScroll} ref={appEl}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <div className="page_header">
              <Navigation />
              <div className="container">
                <Input
                  type="text"
                  name="search"
                  onChange={handleSearchChange}
                  placeholder="Search by name"
                  className="search"
                  value={searchValue}
                />
              </div>
            </div>
            <PokemonsList
              pokemonsData={pokemonsData}
              searchValue={searchValue}
              ref={setListEl}
            />
          </Route>
          <Route path="/pokemon/:id/about">
            <div className="page_header">
              <Navigation />
            </div>
            <PokemonPage />
          </Route>
          <Route>
            <Navigation />
            <NotFound />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
