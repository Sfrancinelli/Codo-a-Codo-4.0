document.getElementById("encabezado").innerHTML = `
<div class="logo-container">
                <a class="logo" href="index.html">
                    <img src="img/LOGO-PRUEBA.png" alt="Logo TPO">
                </a>
            </div>

            <div class="resto-header"> 
                <div class="nav-bar">
                    <nav class="nav">
                        <ul class="inicio">
                            <li class="activa">
                                <a aria-current="page" class="active" href="index.html">INICIO </a>
                            </li>
                            <li>
                                <a href="institucional.html">INSTITUCIONAL </a>
                            </li>
                            <li>
                                <a href="asistencia.html">ASISTENCIA AL PACIENTE </a>
                            </li>
                            <li>
                                <a href="novedades.html">NOVEDADES </a>
                            </li>
                            <li>
                                <a href="contacto.html">CONTACTO </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="icons-nav-832">
                    <h2>Más información:</h2>
                    <div>
                        <a class="redsoc" href="http://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="redsoc" href="http://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a class="redsoc" href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-square-instagram" style="font-size: 1.05em;"></i></a>
                        <a class="redsoc" target="_blank" href="mailto:ejemplo@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    </div>                      
                </div>

            </div>
                <div class="top-navbar-responsive">
                    <h1>Centro Médico "Codo a Codo"</h1>
                </div>

                <div class="top-navbar">
                    <div class="item1">
                        <img src="img/direccion.svg" alt="Icon Dirección" class="item-icon1">
                        <span class="direccion"><a href="https://www.google.com.ar/maps/place/Florida+325+c1005,+C1005AAG+CABA/@-34.6042749,-58.3761541,18z/data=!3m1!4b1!4m5!3m4!1s0x95bccacda4c17dc9:0x75b394bd29700b01!8m2!3d-34.6042771!4d-58.3750598" target="_blank">Florida 325</a></span>
                    </div>
                    <div class="item2">
                        <img src="img/telefono.svg" alt="Icon Teléfono" class="item-icon2">
                        <span class="telefono">4581-8538</span>
                    </div>
                    <div class="item3">
                        <img src="img/whatsapp.svg" alt="Icon Whatsapp" class="item-icon3">
                        <span class="whatsapp">11 4805-7548</span>
                    </div>
                    <div class="item4">
                        <img src="img/horario.svg" alt="Icon Horario" class="item-icon4">
                        <span class="horario">Lun a Vie:8 a 20hs.</span>
                    </div>
                </div>

                <div class="flex-log-icon">
                    <button id="btn-iniciar-sesion" data-modal-objetivo="#modal-iniciar-sesion"
                    class="btn-modal-abrir boton-menu">
                    Log in
                    </button>
                    <div class="contenedor-modal" id="contenedor-modal-1">
                        <div class="modal modal-generico" id="modal-iniciar-sesion">
                            <div class="modal-header">
                                <h5 class="modal-titulo">Iniciar sesión</h5>
                                <button class="btn-modal-cerrar">X</button>
                            </div>
                            <div class="modal-body">
                                <form action="#" method="post">
                                    <fieldset class="label-textbox">
                                        <label for="cuit_iniciar_sesion">CUIT/CUIL (sin guiones)</label>
                                        <input id="cuit_iniciar_sesion" name="cuit" type="number"
                                            min="1" placeholder="Introduzca su CUIT/CUIL..." required>
                                    </fieldset>
                                    <fieldset class="label-textbox">
                                        <label for="contraseña_iniciar_sesion">Contraseña</label>
                                        <input id="contraseña_iniciar_sesion" name="contraseña" type="password"
                                            placeholder="Introduzca su contraseña..." required>
                                    </fieldset>
                                    <button type="submit">Iniciar sesión</button>
                                    <fieldset class="label-checkbox">
                                        <label for="recordar">Recordarme</label>
                                        <input id="recordar" type="checkbox" checked="checked">
                                    </fieldset>
                                    <a role="button" href="#" data-modal-objetivo="#modal-registrarse" class="btn-modal-abrir">¿Todavía no
                                        tienes una cuenta?</a>
                                </form>
                            </div>
                        </div>

                        <div class="modal modal-generico" id="modal-registrarse">
                            <div class="modal-header">
                                <h5 class="modal-titulo">Registrarse</h5>
                                <button class="btn-modal-cerrar">X</button>
                            </div>
                            <div class="modal-body">
                                <form action="#" method="post">
                                    <fieldset class="label-textbox">
                                        <label for="nombre_registrarse">Nombre</label>
                                        <input id="nombre_registrarse" name="nombre" type="text"
                                            placeholder="Introduzca su nombre..." required>
                                    </fieldset>
                                    <fieldset class="label-textbox">
                                        <label for="apellido_registrarse">Apellido</label>
                                        <input id="apellido_registrarse" name="apellido" type="text"
                                            placeholder="Introduzca su apellido..." required>
                                    </fieldset>
                                    <fieldset class="label-textbox">
                                        <label for="dni_registrarse_registrarse">DNI</label>
                                        <input id="dni_registrarse" name="dni" type="number"
                                        min="1" placeholder="Introduzca su DNI..." required>
                                    </fieldset>
                                    <fieldset class="label-textbox">
                                        <label for="cuit_registrarse">CUIT/CUIL (sin guiones)</label>
                                        <input id="cuit_registrarse" name="cuit" type="number"
                                        min="1" placeholder="Introduzca su CUIT/CUIL..." required>
                                    </fieldset>
                                    <fieldset class="label-textbox">
                                        <label for="contraseña_registrarse">Contraseña</label>
                                        <input id="contraseña_registrarse" name="contraseña" type="password"
                                            placeholder="Introduzca su contraseña..." required>
                                    </fieldset>
                                    <button type="submit">Registrarse</button>
                                    <a role="button" href="#" data-modal-objetivo="#modal-iniciar-sesion" class="btn-modal-abrir">¿Ya
                                        tienes una cuenta?</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="icons-nav">
                        <a class="redsoc" href="http://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="redsoc" href="http://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a class="redsoc" href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                        <a class="redsoc" target="_blank" href="mailto:ejemplo@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                <div class="hamburguesa">
                    <span class="ham"></span>
                    <nav class="p-n" id="p-n">
                    <ul>
                        <li class="activa">
                            <a aria-current="page" class="active" href="index.html">INICIO</a>
                        </li>
                        <li>
                            <a href="institucional.html">INSTITUCIONAL </a>
                        </li>
                        <li>
                            <a href="asistencia.html">ASISTENCIA AL PACIENTE </a>
                        </li>
                        <li>
                            <a href="novedades.html">NOVEDADES </a>
                        </li>
                        <li>
                            <a href="contacto.html">CONTACTO </a>
                        </li>
                    </ul>
                    </nav>                        
                </div>         
`
document.getElementById("pie").innerHTML = `
<div class="logo-footer">
                    <a href="index.html">
                    <img src="img/LOGO-PRUEBA.png" alt="Logo TPO">
                    </a>
                </div>

                <div class="info-footer">
                    <div>
                        <h5>SUCURSAL C.A.B.A</h5>
                    </div>
                    <br>
                    <div>
                        <p>Sede Central</p>
                        <p>FLORIDA 325, CABA.</p>
                        <p>CP C1199ABB </p>
                        <P>Tel. 4581-8538</P>
                        <p>Cel. (+54 11) 4805 7548</p>
                    </div>
                </div>

                <div class="info-footer2">
                    <div>
                        <h5>SUCURSAL RAMOS MEJÍA</h5>
                    </div> 
                    <br>
                    <div>
                        <p>Sede segunda</p>  
                        <p>Avenida de Mayo 2212</p>
                        <p>CP ********</p>
                        <p>Tel. 4623-6280</p>
                        <p>Cel. (+54 11) 9350 5463</p>              
                    </div>
                </div>

                <div class="legales-footer">
                    <h5>LEGALES</h5>
                    <br>
                    <p><a href="#" class="linkFooter" analytics="" action="footer-terminos-condiciones" category="home" label="footer terminos y cond">Términos y condiciones de uso</a></p>
                    <p><a href="#" class="linkFooter" analytics="" action="footer-politica" category="home" label="Footer politica de privacidad">Política de privacidad</a></p>
                    <p><a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario">Defensa de las y los Consumidores. <br><strong>(Para reclamos ingrese aquí)</strong></a></p>
                    <br>
                    <small>Derechos reservados @2022</small>
                </div>
`

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^.{7,8}$/, // 7 a 8 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

$(document).ready(function() {

    $('#formulario').submit(function(e) {
      e.preventDefault();
      
      // OBTENER LOS DATOS. 
      var nombre = $('#input_nombre').val();
      var surname = $('#input_apellido').val();
      var DNI = $('#input_DNI').val();
      var cel = $('#input_celular').val();
      var email = $('#input_email').val();
      //Guardo los mensajes de error en un array para mostrarlos secuencialmente
      var errores = [];

      if (!expresiones.nombre.test(nombre) || !expresiones.nombre.test(surname))
        errores.push('Nombre y apellido solo pueden contener letras, espacios y acentos');
      if (!expresiones.dni.test(DNI))
        errores.push('El DNI puede tener 7 a 8 digitos');
      if (!expresiones.telefono.test(cel))
        errores.push('El nro de celular puede tener de 7 a 14 numeros');
      if (!expresiones.correo.test(email))
        errores.push('El email deber respetar el formato xxx@xxx.xx');

      // Si hay errores los muestro, de lo contrario reseteo el formulario
      if (errores.length > 0) {
        $("div.msg_error").html(errores.join(' | '))}
      else {
        $('#formulario').get(0).reset();
        $("div.msg_error").html('El formulario se envio correctamente')}
    });
    
});