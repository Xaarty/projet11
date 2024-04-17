import "../styles/main.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-logo" : isActive ? "active main-nav-logo" : "main-nav-logo"}>
          <img className="main-nav-logo-image" src="./argentBankLogo.webp" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink to="/sign-in" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"}>
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </NavLink>
      </nav>
    </header>
  );
}