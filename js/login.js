function login () {

  let usuario = document.getElementById('username').value;
  let clave = document.getElementById('clave').value;
  let nombre = document.getElementById('nombre').value;

  if (usuario === "" || clave === "" || nombre === "") {
      document.getElementById('username').classList.add('error');
      document.getElementById('clave').classList.add('error');
      document.getElementById('nombre').classList.add('error');
     // document.getElementsByClassName('oculto').classList.add('show');
     // document.getElementsByClassName('show').classList.remove('oculto');
      alert ("Debe ingresar nombre, usuario y clave");  
  } else {
      //document.getElementsByClassName('oculto').classList.remove('show');
      //document.getElementsByClassName('show').classList.add('oculto');
      document.getElementById('username').classList.remove('error');
      document.getElementById('clave').classList.remove('error');
      document.getElementById('nombre').classList.remove('error');
      localStorage.setItem('user', nombre);
      localStorage.setItem('email', usuario);
      location.href='index.html';
  }
}

document.addEventListener('DOMContentLoaded', () =>  {
  document.getElementById('inicio').addEventListener('click', () =>{
      login()
  })
})