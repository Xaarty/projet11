import "../styles/main.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-logo" : isActive ? "active main-nav-logo" : ""}>
          <img className="main-nav-logo-image" src="./argentBankLogo.webp" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : ""}>
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </NavLink>
      </nav>
    </header>
  );
}
<nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>



{/* {/* //   <ul>
    //     <NavLink */}
    //       to="/"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active" : ""
    //       }
    //     >
    //       Accueil
    //     </NavLink>
    //     <NavLink
    //       to="/apropos"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active" : ""
    //       }
    //     >
    //       A propos
    //     </NavLink>
    //   </ul> */}