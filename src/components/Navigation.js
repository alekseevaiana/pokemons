import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const matchBaseUrl = location.pathname === "/";

  return (
    <div className="navigation">
      {matchBaseUrl ? (
        <div className="navigation__logo">Pokemons</div>
      ) : (
        <Link to="/" className="navigation__logo">
          Pokemons
        </Link>
      )}
    </div>
  );
}
