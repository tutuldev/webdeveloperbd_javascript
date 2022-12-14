// arry er elemnet sum korar function toiri kora 

// function sum(arr){
//     let sum = 0; 
//     if(!Array.isArray(arr)) return  'please provide array'
//     for(let num of arr){

//         sum += num  
       
//     }
//     return sum 
     
// }

// const arr = [1,2,3]
// console.log(sum(arr))

function sumArray(arr){
  let  sum = 0
  if(!Array.isArray(arr)) return 'please provide array!'
    for(let num of arr){
       sum += num 
    }
    return sum;

}
let arr = [1,2,3,5,2]
console.log(sumArray(arr))