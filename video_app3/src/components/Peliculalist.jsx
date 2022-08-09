import React from "react";
import {Link} from "react-router-dom"
import estilos from "./PeliculaCard.module.css"

export function PeliculaCard(props){
    const {movie} = props;
    const imgurl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    
    return (
        <li className={estilos.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img 
                width={230} 
                height={345} 
                className={estilos.movieImage} 
                src={imgurl} 
                alt={movie.title} 
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}
