document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

/* Entrega 1 parte 3 */

document.addEventListener("DOMContentLoaded", ()=> {
    let usuario = localStorage.getItem("user");

    if (usuario == null) {
        alert ("No hay nadie loggeado");
        location.href = "login.html";
    } else {
        document.getElementById("usuario").innerHTML=usuario; /* Entrega 2 parte 1*/
        
        document.getElementById("cierro").addEventListener("click", () => {
            alert ("cierró sesión");
            localStorage.removeItem('user');
            location.href="login.html"; 
        });
    };
});