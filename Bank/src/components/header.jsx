import "../styles/main.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          A propos
        </NavLink>
      </ul>
    </header>
  );
}
