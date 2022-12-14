

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



// function showProductInfo(products){
const showProductInfo =  products => {

    let singleProduct ='';

    for(let product of products){
        singleProduct += ` 
    productName-${product.productName}
    productPrice-${product.productPrice}
    productQuantity-${product.productQuantity}
    productIsAvilable-${product.productIsAvilable}
    `;
    }
    
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(products);

console.log(productOut);





