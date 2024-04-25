import "../styles/main.scss";
import { NavLink } from "react-router-dom";

import jsonData from "../../userbank.json";

import { connect, useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { authenticationReducer } from "../features/userSlic";

function Header() {
  const log = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(authenticationReducer(false))
  window.localStorage.removeItem('token');
  const json = jsonData
  const { accountName } = json
  console.log(log)
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending main-nav-logo" : isActive ? "active main-nav-logo" : "main-nav-logo"}>
          <img className="main-nav-logo-image" src="./argentBankLogo.webp" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {log.isLoggedIn ? (
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
        ) : ( 
           <div>
           <NavLink to="/sign-in" className={({ isActive, isPending }) => isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"}>
             <i className="fa fa-user-circle"></i>
             <p>Sign In</p>
           </NavLink>
         </div>
        )}
      </nav>
    </header>
  )
}



export default (Header)