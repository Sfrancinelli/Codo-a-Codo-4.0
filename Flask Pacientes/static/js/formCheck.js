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