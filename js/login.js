   /* let user = document.getElementById('usuario').value;
    let pwd = document.getElementById('clave').value;
    let email = document.getElementById('email').value;

function login () {


   if (user===""){
        document.getElementById('usuario').classList.add ('error');
        alert ("Debe ingresar el Usuario");}

     if (pwd==="" || email==="") {
        document.getElementById('clave').classList.add ('error');
        document.getElementById('email').classList.add ('error');
        alert ("Debe ingresar su Clave");    
    } else {
        localStorage.setItem('user', usuario);
        location.href='index.html';
    }}

document.addEventListener('DOMContentLoaded', ()=>{
   / document.getElementById('inicio').addEventListener ('click', ()=>{
       login();
       });
}); 

---------------------------------------------------------
 function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    
} 

function validar(){
    let pass = document.getElementById("clave").value;
    let email = document.getElementById("email").value;
    
    if(pass === "" || email === "" ){
      document.getElementById('clave').classList.add ('error');
      document.getElementById('email').classList.add ('error');
      document.getElementById('clave').
        } else{
          localStorage.setItem('user', usuario);
          location.href = "index.html";
        }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inicio").addEventListener("click", function () {
      validar();
    });
  });
  
  const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{1,12}$/

}

  */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{1,12}$/

}

const campos = {
  nombre: false,
  email: false,
  password: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre')
    break;
    case "email":
        validarCampo(expresiones.email, e.target, 'email')  
    break;
    case "password":
       validarCampo(expresiones.password, e.target, 'password')
    break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-exclamation');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
    localStorage.setItem('user', 'nombre');
    location.href = 'index.html';

  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-exclamation');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}

inputs.forEach ( (input) => {
  input.addEventListener ('keyup', validarFormulario);
  input.addEventListener ('blur', validarFormulario);
});


/*Para enlazarlo con el inicio*/

formulario.addEventListener('submit', (e) => { 
  e.preventDefault();

  if(campos.nombre && campos.email && campos.password) {
    document.getElementById('inicio').addEventListener('click', () => {
      validarFormulario();
    })
  }

}); 

