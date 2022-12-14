
// for each loop 
// const arr = ['i','love','programming'];

// arr.forEach(function(el){
//     console.log(el)
// })

// for of loop -------------->>>>

const arr = ['i','love','programming'];

for(let el of arr){
    console.log(el);
}

// for in loop ----------->>>>

const obj = {
    productName:'banana',
    productPrice:12,
    productQuantity:4,
    productIsAvilable:true

};

for(let el in obj){
    console.log(obj[el]);
};

console.log(obj);


