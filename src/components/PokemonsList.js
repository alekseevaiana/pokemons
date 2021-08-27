import { useEffect, useState } from "react";
import PokemonShortCard from "./PokemonShortCard";

export default function PokemonsList() {
  const [pokemonsData, setPokemonsData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonsData(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      {pokemonsData && pokemonsData.length}
      {pokemonsData &&
        pokemonsData.map((item) => {
          return <PokemonShortCard key={item.name} data={item} />;
        })}
    </section>
  );
}
