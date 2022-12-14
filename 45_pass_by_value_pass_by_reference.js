//pass by value
//original value change hoi na
const a = 10
function passByValue(a){
let b = a
b= 20
console.log(b)
}
passByValue(a)

// pass by reference 
// orginal value change hoyu jai

const aObj = {
    num:10
}
function passByReference(){
   
    console.log(aObj)
    const bObj= aObj
    console.log(bObj)
    bObj.num = 20
    console.log(bObj)
    console.log(aObj)
}
console.log(aObj) //old
passByReference(aObj)
console.log(aObj) //function celling er niche tai update value but upore hole old value hobe