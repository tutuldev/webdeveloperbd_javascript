

const product = [{
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

   

function showProductInfo(product){

    let singleProduct ='';
    for(let index = 0; index < product.length; index++){
     singleProduct += ` 
     productName-${product[index].productName}
     productPrice-${product[index].productPrice}
     productQuantity-${product[index].productQuantity}
     productIsAvilable-${product[index].productIsAvilable}
     `
}
console.log(singleProduct);

return singleProduct;
    
};

const productOut = showProductInfo(product);

// console.log(productOut);










// for loop------------------>>>>>>>>>>>>>>>>

// for(i=0;i<10;i++){
//     console.log(i)
// }

// const productInfoArr=['potato',30,3,true];

// console.log(productInfoArr.length)
// for(i=0;i<productInfoArr.length;i++){
//     console.log(productInfoArr[i])
//     console.log("abdur rahaman tutul")
// }





// while loop-------------->>>>>>>>>>

const productInfoArr=['potato',30,3,true];

let i=0;
while(i<productInfoArr.length){
    console.log(productInfoArr[i]);
    i++;
}


