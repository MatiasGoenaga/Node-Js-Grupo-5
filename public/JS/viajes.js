document.querySelector("body").onload = async () => {
  const res = await fetch("http://localhost:3000/viajesgrupales");
  const datos = await res.json();
  let listahtml = document.querySelector("#tarjetas");
  listahtml.innerHTML = " ";
  datos.forEach((registro) => {
    listahtml.innerHTML += `<div class="card m-2 tarjetaX">
<a href="contacto.html" style="text-decoration: none; color: inherit">
  <img src="img/${registro?.imagen}" class="card-img-top" alt="..." />
  <div class="card-body">  
    <h5 class="card-title">${registro?.nombre}</h5>
    <h5 class="card-title">${registro?.nombre_pais}</h5>
    <p class="card-text">Aereos desde $${registro?.precio}</p>
  </div>
</a>      
<div class="info-window">
<form method="POST" action="/viajesgrupales?_metodo=DELETE">
<input type="hidden" name="idEliminar" value="${registro.ID}">
  <p>
    Desde $${registro?.precio} por persona.

    <br />4 Días - 3 Noches Vuelo + Hotel + Excursiones.

    <br /> Temporada 2024 - Salida ${registro?.nombre_salidas}.
  </p>          
  <a href="contacto.html" class="info-button">Más info</a>
  	<a href="/modificar/${registro.ID}"class="info-button">Modificar</a>
			<input type="submit" value="Eliminar"class="info-button">
		</form>   
</div>
</div>     
    `;
  });
};
