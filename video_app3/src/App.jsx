import React from "react";
import { MoviesGrilla } from "./components/PeliculaGrilla";
import estilo from "./App.module.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
      <Router>
        <header>
          <Link to="/">
            <h1 className={estilo.title}>Catalogo Peliculas</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }