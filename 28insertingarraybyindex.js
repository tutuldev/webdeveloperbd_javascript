const arr = ['i','love','you']

console.log(arr.length);
console.log(arr[0]);


console.log(arr.splice(1,3,'we') )
console.log(arr)

// let newArry =['you',arr.slice(1,2) ]
console.log(arr.slice(0,2) )


let newArry =['you', ...arr.slice(0,2) ]
console.log(newArry)

// ... 3ta . holo spread operator 


