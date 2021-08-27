export default function PokemonShortCard({ data }) {
  return (
    <div>
      {data.name}
      <a href={data.url}>link</a>
    </div>
  );
}
