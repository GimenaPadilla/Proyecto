   // let user = document.getElementById('usuario').value;
    let pwd = document.getElementById('clave').value;
    let email = document.getElementById('email').value;

function login () {


 //  if (user===""){
 //       document.getElementById('usuario').classList.add ('error');
 //       alert ("Debe ingresar el Usuario");}

     if (pwd==="" || email==="") {
        document.getElementById('clave').classList.add ('error');
        document.getElementById('email').classList.add ('error');
        alert ("Debe ingresar su Clave");    
    } else {
        localStorage.setItem('user', usuario);
        location.href='portada.html';
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inicio').addEventListener ('click', ()=>{
       login();
       });
});
