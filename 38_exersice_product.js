
// ekhane product is avilable hole notun ar ekta object item jog hobe 

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
    if(product.productIsAvilable){
    singleProduct += ` 
    productName-${product.productName}
    productPrice-${product.productPrice}
    productQuantity-${product.productQuantity}
    productIsAvilable-${product.productIsAvilable}
    In Stock
    `;
    }else{
    singleProduct += ` 
    productName-${product.productName}
    productPrice-${product.productPrice}
    productQuantity-${product.productQuantity}
    productIsAvilable-${product.productIsAvilable}
    outOf Stock
        `;
        }
    }
    
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(products);

console.log(productOut);





