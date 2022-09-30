document.getElementById("encabezado").innerHTML = `
<div class="logo-container">
                    <a class="logo" href="index.html">
                    <img src="img/LOGO-PRUEBA.png" alt="Logo TPO">
                    </a>
                </div>
                <div class="resto-header">  <!--FLEX--> 
                    <div class="nav-bar">
                        <nav class="nav">
                            <ul class="inicio">
                                <li><a aria-current="page" class="active" href="index.html"> INICIO </a></li>
                                <li><a href="institucional.html"> INSTITUCIONAL </a></li>
                                <li><a href="asistencia.html"> ASISTENCIA AL PACIENTE </a></li>
                                <li><a href="novedades.html"> NOVEDADES </a></li>
                                <li><a href="contacto.html"> CONTACTO </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="top-navbar-responsive">
                    <h1>Centro Médico "Codo a Codo"</h1>
                </div>
                <div class="top-navbar">
                    <div class="item1">
                        <img src="img/direccion.svg" alt="Icon Dirección" class="item-icon1">
                        <span class="direccion">Florida 325</span>
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
                        <span class="horario">Lun a Vie:8 a 20hs. y Sab:9 a 12hs.</span>
                    </div>
                </div>
                <div class="flex-log-icon">
                     <div class="log-in" onclick="document.getElementById('logear').style.display='block'">
                        <a rel="noopener noreferrer" href="#" class="boton-log">Log in</a>
                    </div>
                    <div id="logear" class="modal">
                         <form class="modal-contenido animate" action="#" method="post">
                          <div class="container">
                            <label for="usuario"><b>CUIT/CUIL</b></label>
                            <input type="text" placeholder="Introduzca su CUIT/CUIL..." name="cuit" required>                      
                            <label for="contra"><b>Contraseña</b></label>
                            <input type="password" placeholder="Introduzca su contraseña..." name="contra" required>                              
                            <button type="submit">Login</button>
                            <label>
                              <input type="checkbox" checked="checked" name="recordar"> Recordarme
                            </label>
                          </div>                      
                          <div class="container" style="background-color:#f1f1f1">
                            <button type="button" onclick="document.getElementById('logear').style.display='none'" class="cancelarbtn">Cancelar</button>
                          </div>
                        </form>
                    </div> 
                    <script>
                        var modal = document.getElementById('logear'); 
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        }
                    </script>                          
                    <div class="icons-nav">
                        <a class="redsoc" href="http://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="redsoc" href="http://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a class="redsoc" href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a class="redsoc" target="_blank" href="mailto:ejemplo@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>                                               
`
document.getElementById("pie").innerHTML = `
<div class="logo-footer">
<a href="index.html">
<img src="img/LOGO-PRUEBA.png" alt="Logo TPO">
</a>
</div>
<div class="info-footer">
    <!-- Acá irían por ejemplo redes sociales, direccón de sucursales,etc.. (con iconos) --> 
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
    <!-- Acá irían por ejemplo datos relevantes de la empresa, como pueden ser el mail, telefono, numero de interno, direcciones, fax, zipcode, terminos y condiciones, legales, defensa al consumidor, etc... (sin iconos?) -->
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