import React from "react"
import estilo from "./Search.module.css"
import {FaSearch} from "react-icons/fa"
import { useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

export function Search(){
    
    const [searchText, setsearchText] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search=" + searchText);
    }
    
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    console.log(search);
        setsearchText(search || "");  
  }, [search]);


    return (
        <form className={estilo.searchContainer} onSubmit={handleSubmit}>
            <div className={estilo.searchBox}>
                <input 
                    className={estilo.searchInput} 
                    type="text" 
                    value={searchText} 
                    onChange={ (e) => setsearchText(e.target.value)} 
                    placeholder="Buscar" 
                />
                <button className={estilo.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>

            </div>

        </form>
    )
}