import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
