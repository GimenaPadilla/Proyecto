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
    let carrito = document.getElementById("carrito");
    let perfil = document.getElementById("perfil");

    if (usuario == null) {
        alert ("No hay nadie loggeado");
        location.href = "login.html";
    } else {
        document.getElementById("usuario").innerHTML=usuario; /* Entrega 2 parte 1*/
        
        document.getElementById("cierro").addEventListener("click", () => {
            alert ("cierró sesión");
            localStorage.removeItem('user');
            localStorage.removeItem('email');
            localStorage.removeItem('segn');
            localStorage.removeItem('ape');
            localStorage.removeItem('ape2');
            localStorage.removeItem('tel');
            location.href="login.html"; 
        });
    };

    carrito.addEventListener("click", () => {
        location.href="cart.html";
    });

    perfil.addEventListener("click", () => {
        location.href="my-profile.html";
    });
});