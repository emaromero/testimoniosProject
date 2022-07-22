import React from "react";
import "../stylesheets/Testimonio.css"

function Testimonio({user}) {
	return (
		<>
			<div className="contenedor-testimonio">
				<img className="imagen-testimonio" src={user.imagen} alt={user.nombre} />
				<div className="contenedor-texto-testimonio">
					<p className="nombre-testimonio">{user.nombre} en {user.pais}</p>
					<p className="cargo-testimonio">{user.cargo} en {user.empresa}</p>
					<p className="texto-testimonio">"{user.testimonio}"</p>
				</div> 
			</div>
		</>
	)
}

export default Testimonio