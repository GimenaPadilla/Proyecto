function login () {

  let usuario = document.getElementById('username').value;
  let clave = document.getElementById('clave').value;

  if (usuario === "" || clave === "") {
      document.getElementById('username').classList.add('error');
      document.getElementById('clave').classList.add('error');
     // document.getElementsByClassName('oculto').classList.add('show');
     // document.getElementsByClassName('show').classList.remove('oculto');
      alert ("Debe ingresar usuario y clave");  
  } else {
      //document.getElementsByClassName('oculto').classList.remove('show');
      //document.getElementsByClassName('show').classList.add('oculto');
      document.getElementById('username').classList.remove('error');
      document.getElementById('clave').classList.remove('error');
      localStorage.setItem('user', usuario);
      location.href='index.html';
  }
}

document.addEventListener('DOMContentLoaded', () =>  {
  document.getElementById('inicio').addEventListener('click', () =>{
      login()
  })
})