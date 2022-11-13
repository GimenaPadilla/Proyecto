let carrito = document.getElementById("carrito");
let perfil = document.getElementById("perfil");

let usuario = localStorage.getItem("user");
let email = localStorage.getItem("email");
let segn = localStorage.getItem("segn");
let ape = localStorage.getItem("ape");
let ape2 = localStorage.getItem("ape2");
let tel = localStorage.getItem("tel");


//Entrega 7 parte 2

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//Entrega 7 parte 3

function getInfo() {
    document.getElementById("nombre").value = usuario;
    document.getElementById("correo").value = email;
    document.getElementById("segn").value = segn;
    document.getElementById("ape").value = ape;
    document.getElementById("ape2").value = ape2;
    document.getElementById("tel").value = tel;

};

//Entrega 7 parte 2

function setInfo() {

    localStorage.setItem('user', document.getElementById("nombre").value);
    localStorage.setItem('email', document.getElementById("correo").value);
    localStorage.setItem('segn', document.getElementById("segn").value);
    localStorage.setItem('ape', document.getElementById("ape").value);
    localStorage.setItem('ape2', document.getElementById("ape2").value);
    localStorage.setItem('tel', document.getElementById("tel").value);

};

//Entrega 7 parte 1

document.addEventListener("DOMContentLoaded", () => {

    if (usuario == null) {
        alert("No hay nadie loggeado");
        location.href = "login.html";
    } else {
        document.getElementById("usuario").innerHTML = usuario;


        document.getElementById("cierro").addEventListener("click", () => {
            alert("cierró sesión");
            localStorage.removeItem('user');
            localStorage.removeItem('email');
            localStorage.removeItem('segn');
            localStorage.removeItem('ape');
            localStorage.removeItem('ape2');
            localStorage.removeItem('tel');
            location.href = "login.html";
        });
    };

    carrito.addEventListener("click", () => {
        location.href = "cart.html";
    });

    perfil.addEventListener("click", () => {
        location.href = "my-profile.html";
    });

    getInfo(); //Entrega 7 parte 3

    //Entrega 7 parte 2

    document.getElementById("btnGuardar").addEventListener("click", () => {
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let apellido = document.getElementById("ape").value;

        if (nombre == "" || correo == "" || apellido == "") {
            alert("Debe completar los campos obligatorios (*)");
        } else {
            setInfo()
        }
    });

});


