// const productInfo1 = {
//     productName:'banana',
//     productPrice:12,
//     productQuantity:4,
//     productIsAvilable:true,
//     showProductInfo:function(){
//        return `
//         productName-${productInfo1.productName} productPrice-${productInfo1.productPrice} productQuantity-${productInfo1.productQuantity} productIsAvilable-${productInfo1.productIsAvilable}
    
//        `
//     }
// }

// console.log(productInfo1.showProductInfo());





const productInfo1 = {
    productName:'banana',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true,
    showProductInfo:function(){
       return `
        productName-${this.productName} productPrice-${this.productPrice} productQuantity-${this.productQuantity} productIsAvilable-${this.productIsAvilable}
    
       `
    }
}

console.log(productInfo1.showProductInfo());
