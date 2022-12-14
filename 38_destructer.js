
// distrucer kora hoice ekhane

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

        const {
            productName,
            productPrice,
            productQuantity,
            productIsAvilable,
        } = product

    singleProduct += ` 
    productName-${productName}
    productPrice-${productPrice}
    productQuantity-${productQuantity}
    productIsAvilable-${productIsAvilable}
    ${product.productIsAvilable ? 'In Stock':'Out of Stock'}
    `;
    
    }
    
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(products);

console.log(productOut);





