function fetchProducts (done) {
    $.get('/api/products', function (data){
        done(data)
    } )
}

function createProductCard (product) {
    return $ (` <div class="col-4 card mx-2 p-2">
                   <h4 class="product-name"> ${product.name}</h4>
                     <div class="product-manufacturer">${product.manufacturer}</div>
                           <div class="row">
                               <div class="col m-3 p-1">
                                      <b> RS. ${product.price}</b>
                                </div>
        
                              <button class=" col m-3  btn btn-primary">Buy</button>
         
                            </div>
     
                </div>` )
}