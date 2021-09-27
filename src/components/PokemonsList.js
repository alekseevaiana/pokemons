import PokemonShortCard from "./PokemonShortCard";

export default function PokemonsList({ pokemonsData, searchValue }) {
  const checkFilteredPokemon = (item) => {
    if (searchValue === "") {
      return true;
    }
    const name = item.name.toLowerCase();
    return name.includes(searchValue);
  };
  return (
    <>
      <section className="pokemons-list">
        {pokemonsData &&
          pokemonsData.filter(checkFilteredPokemon).map((item, id) => {
            return <PokemonShortCard key={id} data={item} />;
          })}
      </section>
    </>
  );
}
