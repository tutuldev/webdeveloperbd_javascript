
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
    console.log(product);
    const[product1,product2]=product;
    console.log(product1);
    console.log(product2);


     return `

    productname-${product1.productName} productprice- ${product1.productPrice} productquantity-${product1.productQuantity} isavailable-${product1.productIsAvilable}
    `;
};

const productOut = showProductInfo(product);

console.log(productOut);



