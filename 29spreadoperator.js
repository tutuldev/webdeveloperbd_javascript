// spread operator array and object er khetre bebohar kora hoi ,,
// array ba objecter er kono onsho niye kaj korar jonno; 

const arr1=['i','love','proggraming']
const arr2=['we','love','development']

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

const arr3 =[...arr1];
console.log(arr3);

const arr4 =[...arr1,'and',...arr2];
console.log(arr4);

// object diye 

const product ={
    productName:'banana',
    productPrice:20,
    productQuantity:2,
    productIsAvableable:true,
}

const updateProduct={
   ...product,
    updateKey:"value",
}

console.log(product);
console.log(updateProduct);

