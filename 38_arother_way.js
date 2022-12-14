
// another way te ekhane ternary operacter use kore if else er kaj ta kora hoice

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
    productIsAvilable:false
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
    ${product.productIsAvilable ? 'In Stock':'Out of Stock'}
    `;
    
    }
    
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(products);

console.log(productOut);





