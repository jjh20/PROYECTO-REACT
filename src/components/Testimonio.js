import React from "react";
import "../styles/Testimonio.css"


export default function Testimonio (props){
    return(
      <div className="contenedor-testimonio">
        <img 
          className="imagen-testimonio" 
          src={require(`../img/${props.imagen}.jpg`)}
          alt="Foto de Caitlin"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
           <strong>{props.nombre}</strong></p>
          <p className="cargo-testimonio">{props.cargo}</p>
          <p className="texto-testimonio">{props.testimonio}</p>


        </div>
      </div>
    );
}