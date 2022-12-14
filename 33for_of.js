

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

//    ekhane 16 no er for loop ke for of loop diye dekhano holo

function showProductInfo(products){

    let singleProduct ='';

    for(let product of products){
        // console.log(product);
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





