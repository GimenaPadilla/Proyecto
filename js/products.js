let autosArray = [];

function showAutosList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let products = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
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


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            autosArray = resultObj.data.products;
            showAutosList(autosArray);
        }
    });
});