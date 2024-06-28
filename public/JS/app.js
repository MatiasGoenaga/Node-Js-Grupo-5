const header = document.getElementById("header");
const footer = document.getElementById("footer");
const form = document.getElementById("form");

const encabezado = `<nav class="navbar navbar-expand-md">
<div class="container">
  <div class="logo">
    <div class="logo_2">
      <img
        class="imagen_1"
        src="/img/Logo_marte.png"
        alt="logo de la Empresa"
      />
      <div class="texto_titulo">
        <h1 id="titulo">MARTE</h1>
        <h2 id="titulo_2">Agencia de Viajes</h2>
      </div>
      <button
        class="navbar-toggler mx-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <h3
      class="animate__animated animate__zoomInLeft animate__delay-2s"
      id="titulo_3"
    >
      tu próximo destino...
    </h3>
  </div>
  <div class="collapse navbar-collapse mx-auto" id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="/index.html"
          >INICIO
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/viajesgrupales.html"
          >VIAJES
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contacto.html">CONTACTO </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/empresa.html">EMPRESA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login.html">LOGIN</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;

const final = `  <div
class="navigation-section"
style="display: flex; justify-content: space-around"
>
<div class="logo-section" style="margin: 0 20px">
  <img src="/img/Logo_marte.png" class="minilogo2x" alt="" />
  <div class="social-icons">
    <a
      href="https://www.instagram.com"
      target="_blank"
      class="social-icon in"
      ><i class="fab fa-instagram"></i
    ></a>
    <a
      href="https://www.facebook.com"
      target="_blank"
      class="social-icon fb"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <a
      href="https://twitter.com/"
      target="_blank"
      class="social-icon tw"
      ><i class="fab fa-twitter"></i
    ></a>
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      class="social-icon li"
      ><i class="fab fa-linkedin-in"></i
    ></a>
  </div>
  <h6>Marte te espera..</h6>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4644418999997!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaea670d4e5d%3A0x2198c954311ad6d9!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1630964093751!5m2!1sen!2sus"
    width="200"
    height="200"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
  >
    Tu navegador no soporta iframes.
  </iframe>
</div>

<!--Columnas del footer-->
<div
  class="footer-column"
  style="
    margin: 0 0px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
  "
>
  <i
    class="fa-solid fa-rocket fa-2xl"
    style="color: #8122b4; margin-left: 5px; margin-bottom: 30px"
  ></i>
  <h3>Viajes</h3>
  <a href="#">Europa</a>
  <a href="#">America</a>
  <a href="#">Conoce Argentina</a>
</div>
<div
  class="footer-column"
  style="
    margin: 0 0px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: normal;
  "
>
  <i
    class="fa-solid fa-hotel fa-2xl"
    style="color: #8122b4; margin-left: 10px; margin-bottom: 30px"
  ></i>
  <h3>Hoteles</h3>
  <a href="#">Descubri destinos</a>
  <a href="#">Paquetes a tu medida</a>
  <a href="#">Oportunidades</a>
</div>
<div
  class="footer-column"
  style="
    margin: 0 0px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: start;
  "
>
  <i
    class="fa-solid fa-circle-info fa-2xl"
    style="color: #8122b4; margin-left: 25px; margin-bottom: 30px"
  ></i>
  <h3>Informacion de Interes</h3>
  <a href="empresa.html">Quienes somos</a>
  <a href="#">Terminos y condiciones </a>
  <a href="contacto.html">Contactanos</a>
</div>
</div>

<div class="developers-section">
<p>@Webmasters: Matias Goenaga ,Walter Mosqueda</p>
</div>`;

header.innerHTML = encabezado;
footer.innerHTML = final;

// Selecciona todos los videos con la clase 'video-gif'
var videos = document.querySelectorAll(".video-gif");

// Añade un listener de eventos a cada video
videos.forEach(function (video) {
  // Cuando el mouse entra en el video, comienza la reproducción
  video.addEventListener("mouseover", function () {
    video.play();
  });

  // Cuando el mouse sale del video, pausa la reproducción
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});

/*validacion contacto */

function validarFormulario(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("mail").value;
  var telefono = document.getElementById("tel").value;
  var provincia = document.getElementById("prov").value;
  var consulta = document.getElementById("text_area").value;

  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    telefono === "" ||
    provincia === "" ||
    consulta === ""
  ) {
    alerta("", "Todos los campos son obligatorios", "warning");
    return false;
  }

  var expresionCorreo = /\w+@\w+\.+[a-z]/;
  if (!expresionCorreo.test(email)) {
    alerta("", "El correo electrónico no es válido", "warning");
    return false;
  }

  if (telefono.length < 9 || telefono.length > 14) {
    alerta("", "El teléfono no es válido", "warning");
    return false;
  }

  alerta("", "Formulario enviado correctamente", "success");
  return true;
}
form.addEventListener("submit", function () {
  form.reset();
});
