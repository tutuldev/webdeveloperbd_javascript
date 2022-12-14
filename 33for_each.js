

const products = [{
    productName:'banana',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true
},
{
    productName:'wheat',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true
}
]

//    ekhane for each diye kora holo 16 no a for loop diye kira hoyecilo ar ekhane for each diye dekhano holo 

function showProductInfo(products){

    let singleProduct ='';
products.forEach(function(product){
    
    singleProduct += ` 
    productName-${product.productName}
    productPrice-${product.productPrice}
    productQuantity-${product.productQuantity}
    productIsAvilable-${product.productIsAvilable}
    `;
})
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(products);

console.log(productOut);





