import React, { useContext } from "react";
import { Router } from "@reach/router";
import { AuthContext } from "./components/Auth";
import { StoreProvider } from "./components/Store";

import LoadingPage from "./pages/LoadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import Nav from "./components/Nav";

import "./bootstrap";
import "./styles.css";
import IfAuth from "./components/IfAuth";

const App = () => {
  const { auth } = useContext(AuthContext);

  if (!auth.loaded) {
    return <LoadingPage />;
  }

  return (
    <>
      <Nav />
      <main role="main" className="container-fluid">
        <IfAuth logged={false}>
          <Router>
            <LoginPage path="/" />
          </Router>
        </IfAuth>
        <IfAuth logged={true}>
          <StoreProvider>
            <Router>
              <NotFoundPage default />
              <HomePage path="/" />
            </Router>
          </StoreProvider>
        </IfAuth>
      </main>
    </>
  );
};

export default App;
