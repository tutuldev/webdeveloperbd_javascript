// const a =10
// function outerFunc(){
//     console.log(a);
// }
// outerFunc();

// ,,,,,,,,,,another ,,,,,,,,,,,,,


const a =10
const f =60;
function outerFunc(){
    const f =50
    console.log(a)
    console.log(f)
    const b = 5 
   return function innerFunc(){
        console.log(b)
    }
  
}
outerFunc()();

//scope ta panier bud bud er moto kaj kore 
// age local scope chack kore pore global scoper variable chack korbe 
