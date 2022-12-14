const arr = ['i','love','you']

console.log(arr.length);
console.log(arr[0]);

// adding  at the end of the arry 

console.log(arr.push('!'))
console.log(arr);

// adding  at the start/beganing of the arry 

console.log(arr.unshift('tutul'))
console.log(arr);




// remove  at the start of the arry 

console.log(arr.shift('tutul'))
console.log(arr);

// remove  at the end of the arry 

console.log(arr.pop('!'))
console.log(arr);

// array slicing index onujayi ar ekhane orginal ta change hosce na
console.log(arr.slice(0,2));
console.log(arr);

// splice er khetre orginal array chage hoye jai 

console.log(arr.splice(0,2));
console.log(arr);

// arrany er shate array add kora ba jog kora 

console.log(arr.concat(['ammu']))
console.log(arr)

// make any arry empty 
arr.length=0
console.log(arr)