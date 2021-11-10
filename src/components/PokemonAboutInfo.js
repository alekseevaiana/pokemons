export default function PokemonAboutInfo({ pokemonData }) {
  return (
    <div className="pokemon-page__about">
      <div className="about__column">
        <div>Id</div>
        <div>Name</div>
        <div>Height</div>
        <div>Weight</div>
        <div>Abilities</div>
      </div>
      <div className="about__column">
        <div>{pokemonData.id}</div>
        <div>{pokemonData.name}</div>
        <div>{pokemonData.height}</div>
        <div>{pokemonData.weight}</div>
        <div>
          {pokemonData.abilities.map((item, index) => (
            <span key={item.ability.name}>
              {item.ability.name}
              {index === pokemonData.abilities.length - 1 ? "" : ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
