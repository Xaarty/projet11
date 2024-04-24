import "../styles/main.scss";
import { NavLink } from "react-router-dom";

import jsonData from "../../userbank.json";

import { connect } from "react-redux";
import { logout } from "../actions/log.actions";

function Header({ isLoggedIn, logout }) {
  const json = jsonData
  const { accountName } = json
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-logo" : isActive ? "active main-nav-logo" : "main-nav-logo"}>
          <img className="main-nav-logo-image" src="./argentBankLogo.webp" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isLoggedIn ? (
          <div>
            <NavLink to="/sign-in" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"}>
              <i className="fa fa-user-circle"></i>
              <p>Sign In</p>
            </NavLink>
          </div>
        ) : ( 
          <div>
            <NavLink to="/user" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"}>
              <i className="fa fa-user-circle"></i>
              <p>{accountName}</p>
            </NavLink> 
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"} onClick={logout}>
              <i className="fa fa-sign-out"></i>
              <p>Sign Out</p>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  console.log("State:", state); // Log the state object
  return {
    isLoggedIn: state.authenticationReducer.isLoggedIn,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);