const alerta = (titulo, mensaje, icono) => {
  swal.fire({
    icon: icono || "",
    title: titulo || "",
    text: mensaje,
    showConfirmButton: false,
    timer: 1500,
    width: "440px",
  });
};

function validateForm() {
  const destino = document.getElementById("destino").value;
  const archivo = document.getElementById("archivo").value;
  const pais = document.getElementById("pais").value;
  if (destino.trim() === "" || archivo.trim() === "" || pais.trim() === "") {
    alerta("", "Todos los campos son obligatorios", "warning");
    return false;
  }
  alerta("", "Registro creado correctamente", "success");
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const boton_sub = document.getElementById("boton_submit");

  if (boton_sub) {
    boton_sub.addEventListener("click", function (event) {
      event.preventDefault();
      if (validateForm()) {
        document.forms["formDestino"].submit();
        resetForm();
      }
      return false;
    });
  }
});

function resetForm() {
  setTimeout(function () {
    const formDestino = document.forms["formDestino"];
    formDestino.reset();
  }, 500);
}
