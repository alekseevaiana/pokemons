import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__logo">
        Pokemons
      </Link>
      {/* <div>Github page</div> */}
    </div>
  );
}
