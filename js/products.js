/*Entrega 3 parte 1*/

function setProductID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"};

/**/    

let elementosArray = [];

function showElementosList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let products = array[i];
        htmlContentToAppend += `
        <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name + " " +"-" + " " + products.currency + " " + products.cost +`</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("informacion").innerHTML = htmlContentToAppend;
    }
}

let catID = PRODUCTS_URL +localStorage.getItem("catID")+ EXT_TYPE; /* Entrega 2 parte 2 */

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(catID).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            elementosArray = resultObj.data.products;
            showElementosList(elementosArray);
        }
    });
});



/* Entrega 2 parte 3 */

function filtrar(){
    //parseInt porque es un string, y necesito un integer
    let inicial = parseInt(document.getElementById('rangeFilterCountMin').value);//tomo el valor mínimo
    let final = parseInt(document.getElementById('rangeFilterCountMax').value);//tomo el valor máximo
    let listaFiltrada = elementosArray.filter(precio => precio.cost >= inicial && precio.cost <= final );  
    showElementosList(listaFiltrada);

}  

  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('rangeFilterCount').addEventListener('click',()=>{
        filtrar();
    });
  });

  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('clearRangeFilter').addEventListener('click',()=>{
        showElementosList(elementosArray);
    });
  });

function ordenDescendente(){
        if (listaFiltrada != undefined){
            listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost)
            showElementosList(listaFiltrada);
        } else{
            elementosArray.sort((ant,sig)=>ant.cost-sig.cost)
            showElementosList(elementosArray);
        };
};

function ordenAscendente(){
    elementosArray.sort((ant,sig)=>sig.cost-ant.cost);
    showElementosList(elementosArray);
};

function ordenRelevancia(){
    elementosArray.sort((ant,sig)=>sig.soldCount-ant.soldCount);
    showElementosList(elementosArray);
};
  
    document.getElementById('sortAsc').addEventListener('click',()=>{
        ordenAscendente();
    });
 

    document.getElementById('sortDesc').addEventListener('click',()=>{
        ordenDescendente();
    });

    document.getElementById('sortByCount').addEventListener('click',()=>{
        ordenRelevancia();
    });

    