// let productName="poteto";
// productPrice=120;
// const productInfo =['potato',10,3,true];

// console.log(productInfo[0]);
// console.log(productInfo[1]);
// console.log(productInfo[2]);
// console.log(productInfo[3]);

// console.log(`
// productname-${productInfo[0]} productprice- ${productInfo[1]} productquantity-${productInfo[2]} isavailable-${productInfo[3]}
// `);

// object   ------------------->

 const productInfoObj = {
    productName:'potato',
    productPrice:30,
    productQuantity:3,
    productIsAvilable:true
}
// acces by 2 way ..
// 1 is---------------->
console.log(productInfoObj['productName']);
// 2 is-------------->
console.log(productInfoObj.productName);


// console.log(`
// productname-${productInfoObj['productName']} 
// `);


// console.log(`
// productname-${productInfoObj.productName} 
// `);


// console.log(`
// productname-${productInfoObj['productName']} productprice- ${productInfoObj['productPrice']} productquantity-${productInfoObj['productQuantity']} isavailable-${productInfoObj['productIsAvilable']}
// `);

console.log(`
productname-${productInfoObj.productName} productprice- ${productInfoObj.productPrice} productquantity-${productInfoObj.productQuantity} isavailable-${productInfoObj.productIsAvilable}
`);