const productInfoObj1 = {
    productName:'banana',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true
}
const productInfoObj2 = {
    productName:'wheat',
    productPrice:50,
    productQuantity:300,
    productIsAvilable:true
}

function showProductInfo(productObj){

    // console.log(productObj);

     return `
    productname-${productObj.productName} productprice- ${productObj.productPrice} productquantity-${productObj.productQuantity} isavailable-${productObj.productIsAvilable}
    `;
};

const product1 = (showProductInfo(productInfoObj1));
const product2 = (showProductInfo(productInfoObj2));
console.log(product2);
