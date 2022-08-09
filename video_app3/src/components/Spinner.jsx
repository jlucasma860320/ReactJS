import React from "react"
import {ImSpinner9} from "react-icons/im"
import estilos from "./Spinner.module.css"

export function Spinner(){

    return (
        <div className={estilos.spin}>
            <ImSpinner9 className= {estilos.spinning} size={60}/>
        </div>)
}