// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmail();
});

function actualizarEmail() {
  document.getElementById(txt-email-usuario).outerHTML = localStorage.email;
}

async function cargarUsuarios() {
      const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
      });
      const usuarios = await request.json();

      let listadoHTML = '';
      for (let usuario of usuarios) {
        let iconEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>'
        let usuarioHTML = `<tr>
                               <td>${usuario.id}</td>
                               <td>${usuario.nombre} ${usuario.apellido}</td>
                               <td>${usuario.email}</td>
                               <td>${usuario.telefono}</td>
                               <td>${iconEliminar}</td>
                              </tr>`
       listadoHTML += usuarioHTML;
      }

      console.log(usuarios);
      document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
}

  function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
  }

  async function eliminarUsuario(id){

  if(!confirm('¿Desea eliminar este usuario?')) {
    return; // corta la funcion
  }

  const request = await fetch('api/usuarios/' + id, {
          method: 'DELETE',
          headers: getHeaders()
        });

        location.reload();
  }