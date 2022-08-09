import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
const contenido = (
<div>
    <h1>Asesoria ReactJS</h1>
    <div>Aprendiendo React Desde 0</div>
  </div>
);
*/

/*function Componente(props){
  //const titulo = props.titulo;
  //const saludo = props.saludo;
  const {titulo, saludo} = props;

  const content = (
    <div className='contenedor'>
    <h1>{titulo}</h1>
    <div>{saludo}</div>
  </div>
  );

  return content
}*/

root.render(
  <App/>
);
