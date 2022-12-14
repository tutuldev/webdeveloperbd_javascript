const productInfoObj1 = {
    productName:'banana',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true
}

const { productName,productPrice}=productInfoObj1;

console.log((productPrice))

const productInfoObj2 = {
    productName:'wheat',
    productPrice:50,
    productQuantity:300,
    productIsAvilable:true
}

function showProductInfo({productName,
    productPrice,
    productQuantity,
    productIsAvilable
}){

    
  
//    const {productName,
//     productPrice,
//     productQuantity,
//     productIsAvilable
// }   =productObj

     return `
    
    productname-${productName} productprice- ${productPrice} productquantity-${productQuantity} isavailable-${productIsAvilable}
    `;
};

const product1 = showProductInfo(productInfoObj1);
const product2 = showProductInfo(productInfoObj2);
console.log(product1);
console.log(product2);


// new concept const