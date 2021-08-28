import PokemonShortCard from "./PokemonShortCard";

export default function PokemonsList({ pokemonsData }) {
  return (
    <section className="pokemons-list">
      {pokemonsData &&
        pokemonsData.map((item) => {
          return <PokemonShortCard key={item.id} data={item} />;
        })}
    </section>
  );
}
