// Call the dataTables jQuery plugin
$(document).ready(function() {
// en inicio
});

async function registrarUsuario() {
      let datos = {};
      datos.nombre = document.getElementById('txtNombre').value;
      datos.apellido = document.getElementById('txtApellido').value;
      datos.telefono = document.getElementById('txtTelefono').value;
      datos.email = document.getElementById('txtEmail').value;
      datos.password = document.getElementById('txtPassword').value;

      let repetirPassword = document.getElementById('txtRepetirPassword').value;

      if(repetirPassword != datos.password) {
         alert("Las contraseñas no coinciden")
         return; // corta la funcion
      }

      if (Object.values(datos).some(value => value === "")) {
        alert("Por favor, completa todos los campos.");
        return; // Corta la función si algún campo está vacío
      } else {
        alert("Usuario registrado.")
        window.location.href = 'login.html'
      }

      const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

}
