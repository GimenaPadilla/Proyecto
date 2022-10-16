let carrito = [];

/* Entrega 5 parte 1 */

function mostrarCarrito(carrito) {

    let articulos = "";

    for (let i = 0; i < carrito.articles.length; i++) {
        let articulo = carrito.articles[i];

        articulos += `
        <tr>
            <th scope="row"><img src="${articulo.image}" alt="product image" class="images" width="100" height="100" ></img></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency} <span id="costounitario">${articulo.unitCost}</span></td>
            <th><input type="number" class="form-control" id="cantidad" min="1" max="100" value="${articulo.count}" required></th>
            <th>${articulo.currency} <span id="total">${articulo.unitCost}</span></th>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    };
};


/* Entrega 5 parte 1 */

document.addEventListener('DOMContentLoaded', function () {
    let user = 25801
    getJSONData(CART_INFO_URL + user + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;

            mostrarCarrito(carrito);

            document.getElementById("cantidad").addEventListener('change', function () {
                multiplicar();
            });
        };
    });

});


/* Entrega 5 parte 3 */

function multiplicar() {
    var total = "";
    total += parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)
    document.getElementById("total").innerHTML = total
};