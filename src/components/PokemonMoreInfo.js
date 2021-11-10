export default function PokemonMoreInfo({ pokemonDataSpecies }) {
  return (
    <div className="pokemon-page__about">
      <div className="about__column">
        <div>Base happines:</div>
        <div>Capture rate</div>
        <div>Color</div>
        <div>Egg groups</div>
      </div>

      <div className="about__column">
        {console.log("pokemon data spesies: ", pokemonDataSpecies)}
        {/* <div>{pokemonDataSpecies.base_happiness}</div> */}
        {/* <div>{pokemonDataSpecies.capture_rate}</div>
                        <div>{pokemonDataSpecies.color}</div> */}
        {/* <div>
                        {pokemonDataSpecies.egg_groups.map((item, index) => (
                          <span>
                            {item.name}
                            {index === pokemonData.abilities.length - 1
                              ? ""
                              : ", "}
                          </span>
                        ))}
                      </div> */}
      </div>
    </div>
  );
}
