let itemProductos = [];
let comentarios = [];
let comentario = [];
let pRelacionados = []; /* Entrega 4 parte 1 */
let prodID = PRODUCT_INFO_URL +localStorage.getItem("prodID")+ EXT_TYPE;
let commentID = PRODUCT_INFO_COMMENTS_URL +localStorage.getItem("prodID")+ EXT_TYPE;
let relID = PRODUCT_INFO_URL +localStorage.getItem("relID")+ EXT_TYPE; /* Entrega 4 parte 1 */
let usuario = localStorage.getItem("user");
let elementosArray = []; 


/* Entrega 3 Parte 2 */

function showDescription(array){
    let descriptionProducts ="";

    descriptionProducts = `
    <br>
    <h3>${array.name}</h3>
    <br>

    <hr/>

    <b>Precio</b>
    <p>${array.currency} ${array.cost}</p>
    <br>

    <b>Descripción</b>
    <p>${array.description}</p>
    <br>

    <b>Categoría</b>
    <p>${array.category}</p>
    <br>

    <b>Cantidad de vendidos</b>
    <p>${array.soldCount}</p>
    <br>

    <b>Imágenes ilustrativas</b>
    <br>
    `

    document.getElementById('description').innerHTML = descriptionProducts
    }

function showImages (array){
    let imagesProducts = "";
    for(let i = 0; i < array.images.length; i++){ 
        let imagenes = array.images[i];

            imagesProducts  += `
            <div class="col-2 contenido" >
                <img src="${imagenes}" alt="product image" class="img-thumbnail"></img>
            </div>
            `
        document.getElementById("items").innerHTML = imagesProducts;
    }};

/* */


/* Puntos de Estrellas */

function puntuacion(puntos){

    var estrellas='';
    for(let i = 1; i <= 5; i ++) {
       if (i<=puntos){
       estrellas += '<i class="fas fa-star checked"></i>'; //icono estrella llena
       }else{
            estrellas += '<i class="far fa-star checked"></i>';//icono contorno estrella
       }
      }
      document.getElementById('calif').innerHTML=estrellas;
      return estrellas; 
   };

    document.getElementById('puntaje').addEventListener('change',function(){

        puntuacion(document.getElementById('puntaje').value);
    }); //Espero que cambie el valor del select

/* */


/* Entrega 3 Parte 3 */

function showCommentsList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){ 
        let info = array[i];
        
        htmlContentToAppend +=`
         <div class="list-group-item list-group-item-action">
         <p>${info.user} - ${info.dateTime} - ${puntuacion(info.score)}</p>
         <p>${info.description}</p>
        </div>
        `
        document.getElementById("comentario").innerHTML = htmlContentToAppend;
}};

/* */


/* Entrega 3 parte 4 - Agregar un comentario nuevo */

function agregar (){
    let item = document.getElementById('comentarionuevo');
    comentario.push(item.value);
    localStorage.setItem('datos',JSON.stringify(comentario));
    item.value="";
    mostrar(comentario);
}

function mostrar(lista){
  

    let items ="";
    for (let item of lista){
        items += 
        `
        <div class="list-group-item list-group-item-action">
        <p class= "list-gropu-item">${usuario} - ${fecha()} - ${puntuacion(document.getElementById('puntaje').value)} </p>
        <p class= "list-gropu-item"> ${item} </p>
        </div>
        `
    }
    document.getElementById('contenedor').innerHTML=items;

}


document.addEventListener('DOMContentLoaded', ()=>{
    comentario = JSON.parse(localStorage.getItem('datos'));
    if (comentario !=null){
        mostrar(comentario);
    }else{
        comentario=[];
    }
    document.getElementById('enviar').addEventListener('click', ()=>{
        agregar();
    })
});

/* */


/* Fecha */

function fecha(){

    let hoy = new Date();

    let dia = hoy.getDate();
    if (dia<10){
        dia="0"+dia
    }

    let mes = hoy.getMonth() + 1;
    if (mes<10){
        mes = "0" + mes;
    }

    let anio = hoy.getFullYear();

    let hora = hoy.getHours();

    let minutos = hoy.getMinutes();

    let segundos = hoy.getSeconds();

    return anio + "-" +  mes + "-" + dia + " " + hora + ":" + minutos + ":" + segundos;
}

/* */


/* Entrega 3 Parte 2 - Entrega 3 Parte 3 */

document.addEventListener("DOMContentLoaded", function(e){ // Parte 2
    getJSONData(prodID).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            itemProductos = resultObj.data;
         showImages (itemProductos);
            showDescription(itemProductos);
        }
    });
    getJSONData(commentID).then(function(resultObj){ // Parte 3
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data;
            showCommentsList(comentarios);
        }
    });
    getJSONData(prodID).then(function(resultObj){ // Entrega 4 parte 1  
        if (resultObj.status === "ok")
        {
            pRelacionados = resultObj.data;
            showRelatedElements(pRelacionados);
        }
    });
});

/* */

/* Entrega 4 Parte 1 */

function showRelatedElements(array){
    let productosRelacionados = "";

    for(let i = 0; i < array.relatedProducts.length; i++){ 
        let pReleacionado = array.relatedProducts[i];
        
        productosRelacionados += `
        <div class="contenido col-2 contenido list-group-item-action thumbnail" onclick="setProdID(${pReleacionado.id})">
            <img src="${pReleacionado.image}" alt="product image" class="images"></img>
            <p>${pReleacionado.name}</p>
        </div> 
        `
        document.getElementById("productosrelacionados").innerHTML = productosRelacionados;
    }};

/* */

/*Entrega 4 parte 1*/

function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"};

/**/ 

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