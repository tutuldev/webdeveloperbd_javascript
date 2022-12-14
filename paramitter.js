// const productInfoObj1 = {
//     productName:'banana',
//     productPrice:12,
//     productQuantity:4,
//     productIsAvilable:true
// }
// const productInfoObj2 = {
//     productName:'wheat',
//     productPrice:50,
//     productQuantity:300,
//     productIsAvilable:true
// }

// function showProductInfo(productObj,productNo){

//     console.log(productNo);

//      return `
//      ${productNo}-
//     productname-${productObj.productName} productprice- ${productObj.productPrice} productquantity-${productObj.productQuantity} isavailable-${productObj.productIsAvilable}
//     `;
// };

// const product1 = showProductInfo(productInfoObj1,'product1');
// const product2 = showProductInfo(productInfoObj2,'product2');
// console.log(product1);
// console.log(product2);

// niche same vabei but ektai argument pass na kore defult set kora holo--------------------->>





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

function showProductInfo(productObj,productNo='productdefultjadebotai'){

    console.log(productNo);

     return `
     ${productNo}-
    productname-${productObj.productName} productprice- ${productObj.productPrice} productquantity-${productObj.productQuantity} isavailable-${productObj.productIsAvilable}
    `;
};

const product1 = showProductInfo(productInfoObj1,'product1');
const product2 = showProductInfo(productInfoObj2);
console.log(product1);
console.log(product2);
