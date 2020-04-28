import React, { useContext } from "react";
import NavLink from "./NavLink";
import IfAuth from "./IfAuth";
import { AuthContext } from "./Auth";

const Nav = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/#">
          Snippets
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <IfAuth>
              <NavLink to="/">Home</NavLink>
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={() => logout()}>
                  Salir
                </a>
              </li>
            </IfAuth>

            <IfAuth logged={false}>
              <NavLink to="/login">Ingresar</NavLink>
            </IfAuth>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
