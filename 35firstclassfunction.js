// function outerFunc(){
//     return function innerFunct(){
//         console.log('Inner Function Output')
//     }
// }
// outerFunc()();

// ekhane ekta function er vitore ar ekta function call korte caile ar ekta parenthachiessh dite hoi


// ,,,,,,,,,another ,,,,,,,,,,,,,,,,,



// const go=function(){
//     console.log('tutul vai')
//     return ('tutul vai')
// };
// go()
// console.log(go())


// ,,,,,,,,,another ,,,,,,,,,,,,,,,,,



function outerFunc(innerFunc){
   console.log(innerFunc())
}
outerFunc(function(){
    console.log('inner functon to be called/callback fucntiion');
});

// ,,,,,,,,,,,,,,,,,,,,,,another ,,,,,,,,,,,,

function outerFunc(innerFn){
    console.log(innerFn())
}

outerFunc(function(){
    console.log('inner function to be called/callback function');
});