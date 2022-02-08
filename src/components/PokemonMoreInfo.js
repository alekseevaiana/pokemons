export default function PokemonMoreInfo({ pokemonDataSpecies }) {
  return (
    <>
      {pokemonDataSpecies && (
        <div className="pokemon-page__about">
          <div className="about__column">
            <div>Base happines:</div>
            <div>Capture rate:</div>
            <div>Color:</div>
            <div>Egg groups:</div>
          </div>

          <div className="about__column">
            <div>{pokemonDataSpecies.base_happiness}</div>
            <div>{pokemonDataSpecies.capture_rate}</div>
            <div>{pokemonDataSpecies.color.name}</div>
            <div>
              {pokemonDataSpecies.egg_groups.map((item, index) => (
                <span key={item.name}>
                  {item.name}
                  {index === pokemonDataSpecies.egg_groups.length - 1
                    ? ""
                    : ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
