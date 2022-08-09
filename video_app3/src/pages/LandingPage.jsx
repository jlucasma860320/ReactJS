import React from "react";
import {MoviesGrilla} from "../components/PeliculaGrilla";
import { Search } from "../components/Search";

export function LandingPage(){
    return (
        <div>
            <Search />
            <MoviesGrilla/>
        </div>
    )
}