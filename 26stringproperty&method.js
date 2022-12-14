const text="i love you";
// length
console.log(text.length);
// Character
console.log(text[0]);

// kon index a kon character ace ta ber 
console.log(text.charAt(5));
// kon character a kon index ace ta ber 
//fast er tai dekhabe 2ta character thakle
console.log(text.indexOf('e'));

// upper case 
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// include or Notification
console.log(text.includes("love"));


// remove space 
console.log(text.trimStart());
console.log(text.trimStart().length);
console.log(text.trimEnd());
console.log(text.trimEnd().length);

// slice 0 theke index suru hoye 3 no nibe r 5 er ag pojonto nibe mane 4 pojonto nibe

console.log(text.slice(3,5));

// substract eta mane kot kothe theke kotha pojonto mot character nebo mane 0 thke mot shamne 6 ta character nebo;
console.log(text.substr(0,6));

// concat 

console.log(text.concat('!'))

// converting array with same base 
console.log(text.split(' ')
)
console.log(text.split(' ').length)