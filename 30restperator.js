// const arr1=['i','love','proggraming']
// const arr2=['we','love','development']

// // destructer
// const [index1,index2,index3]=arr1;

// console.log(index1)
// console.log(index2)
// console.log(index3)

// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])

// rest value in array---------------??>>>>>>>>>>>>

// const arr1=['i','love','proggraming']
// const arr2=['we','love','development']

// // destructer
// const [index1,...restValue]=arr1;
// console.log(index1,restValue)



// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])


// rest value in object---------------??>>>>>>>>>>>>

const product ={
    productName:'banana',
    productPrice:20,
    productQuantity:2,
    productIsAvableable:true,
}

// const{productName,productPrice,productQuantity,productIsAvableable}=product;
// console.log(productName,productPrice);


const{productName,...restObjValue}=product;

console.log(productName,restObjValue);







const updateProduct={
   ...product,
    updateKey:"value",
}

console.log(product);
console.log(updateProduct);
