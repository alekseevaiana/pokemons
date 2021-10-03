import React, { forwardRef } from "react";
import PokemonShortCard from "./PokemonShortCard";

function PokemonsList({ pokemonsData, searchValue }, ref) {
  const checkFilteredPokemon = (item) => {
    if (searchValue === "") {
      return true;
    }
    const name = item.name.toLowerCase();
    return name.startsWith(searchValue);
  };
  return (
    <section className="pokemons-list container" ref={ref}>
      {pokemonsData &&
        pokemonsData.map((item) => {
          return (
            <div
              style={{ display: checkFilteredPokemon(item) ? "block" : "none" }}
            >
              <PokemonShortCard key={item.name} data={item} />
            </div>
          );
        })}
    </section>
  );
}

export default forwardRef(PokemonsList);
