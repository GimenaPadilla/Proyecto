let carrito = []; //Entrega 5 parte 1
let tipoDeEnvio = document.getElementsByName('radioCheck'); //Entrega 6 parte 1

/* Entrega 5 parte 1 */ /*Entrega 6 parte 1 (onchange) */

function mostrarCarrito(carrito) {

    let articulos = "";

    for (let i = 0; i < carrito.articles.length; i++) {
        let articulo = carrito.articles[i];

        articulos += `
        <tr>
            <th scope="row"><img src="${articulo.image}" alt="product image" class="images" width="100" height="100"></img></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency} <span id="costounitario">${articulo.unitCost}</span></td>
            <th><input onchange='cuentas()' type="number" id="cantidad" min="1" max="100" value="${articulo.count}"></th>
            <th>${articulo.currency} <span id="artXcant">${articulo.unitCost}</span></th>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    };
};

/* Entrega 5 parte 3 */ /* Entrega 6 parte 1 */

function cuentas() {

    let subtotal = parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)

    let costoEnvio = 0;

    for (let i=0; i< tipoDeEnvio.length; i++){
        if (tipoDeEnvio[i].checked){
            costoEnvio = subtotal * parseFloat(tipoDeEnvio[i].value);
        };
    };

    document.getElementById("artXcant").innerHTML = subtotal;
    document.getElementById("idsubto").innerHTML = subtotal;
    document.getElementById('idCostEnv').innerHTML= (costoEnvio).toFixed(0);
    document.getElementById('total').innerHTML= parseFloat((subtotal).toFixed(2)) + parseFloat((costoEnvio).toFixed(2));
};


/* Entrega 5 parte 1 */

document.addEventListener('DOMContentLoaded', function () {
    let user = 25801
    getJSONData(CART_INFO_URL + user + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;

            mostrarCarrito(carrito);

        };
    });

/* Entrega 6 parte 2 */

function desactivarCampos(){

    var numbTarjeta = document.getElementById("idntarjeta");
    var codigSeg = document.getElementById("idcodseg");
    var vencimiento = document.getElementById("idvencimiento");
    var numCuenta = document.getElementById("idnumbcuenta");
    var noseleccion = document.getElementById("noseleccion");
    var sptarjetacredito = document.getElementById("sptarjetacredito");
    var sptransfbancaria = document.getElementById("sptransfbancaria");

    document.getElementById("inputTDC").addEventListener('click', function(e) {
        numbTarjeta.removeAttribute("disabled")
        codigSeg.removeAttribute("disabled")
        vencimiento.removeAttribute("disabled")
        numCuenta.setAttribute("disabled" , "")
        noseleccion.classList.add("oculto")
        sptarjetacredito.classList.replace("oculto", "mostrar")
        sptransfbancaria.classList.replace("mostrar", "oculto")
    });

    document.getElementById("inputTB").addEventListener('click', function(e) {
        numCuenta.removeAttribute("disabled")
        numbTarjeta.setAttribute("disabled" , "")
        codigSeg.setAttribute("disabled" , "")
        vencimiento.setAttribute("disabled" , "")
        noseleccion.classList.add("oculto")
        sptransfbancaria.classList.replace("oculto", "mostrar")
        sptarjetacredito.classList.replace("mostrar", "oculto")
    });

}

/* Entrega 6 parte 1 */
    for (let i=0; i< tipoDeEnvio.length; i++){
        tipoDeEnvio[i].addEventListener('click',()=>{
            cuentas();
        })
       
    }
/* Entrega 6 parte 2 */
    desactivarCampos();
});

/* Entrega 6 parte 3 */

function validaciones() {

    let inputTDC = document.getElementById("inputTDC");
    let inputTB = document.getElementById("inputTB");

    let validity = true

    if (!inputTDC.checked || !inputTB.checked) {
        validity = false;
        document.getElementById("btn-modal-terminos").classList.add("invalid-color");
        document.getElementById("feedback-modal-terminos").style.display = "inline";
    } else {
        document.getElementById("btn-modal-terminos").classList.remove("invalid-color");
        document.getElementById("feedback-modal-terminos").style.display = "none";
    }

    return validity;
}

/* Entrega 6 parte 3 */

function exito() {

    if (body.classList.add('was-validated')){
    document.getElementById("alerta").classList.replace("oculto", "mostrar")};

}

document.getElementById("formulario").addEventListener('submit', event => {
    if (!validaciones() || !this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

    }
    document.body.classList.add('was-validated');
    ['change', 'input'].forEach(evento => { document.body.addEventListener(evento, validaciones) })

    exito()
})

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