import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { get } from "../utils/httpClient";
import peliculas from "./movies.json"
import { PeliculaCard } from "./Peliculalist";
import estilos from "./PeliculaGrid.module.css"
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery"


export function MoviesGrilla() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
   setIsLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search 
    :"/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if(isLoading){
    return <Spinner/>;
  }

  return (
    <ul className={estilos.moviesGrid}>
      {movies.map((movie) => (
        <PeliculaCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}