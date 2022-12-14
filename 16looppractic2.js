


   
const product =[{
    productName:'banana',
    productPrice:'13',
    productQuantity:5,
    productIsAvilable:true
},
{
    productName:'orange',
    productPrice:'15',
    productQuantity:7,
    productIsAvilable:false
}
]

function showProductInfo(product){
let singleProduct='';
for(let index = 0; index < product.length;index++){
    singleProduct += `
    productName-${product[index].productName}
    productPrice-${product[index].productPrice}
    productQuantity-${product[index].productQuantity}
    productIsAvilable-${product[index].productIsAvilable}  `
}
return singleProduct;

}


const productOut = showProductInfo(product);
console.log(productOut);





