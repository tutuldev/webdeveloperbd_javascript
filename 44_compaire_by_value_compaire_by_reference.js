// all premetive data type compire by value
const a = 10
const b =10
console.log(a===b)
//primitive er khetre sudu value gulo check hoi
//reference er khetre value check na hoye memorite locaction ta compaire ba check hoi

// all complaxe data type reference data type compaire hoi memori location diye
const aObj={}
const bObj={}
//false hobe
console.log(aObj===bObj)

const cObj={a: 10}
const dObj={b: 10}
//false hobe
console.log(cObj===dObj)

const aArray =[]
const bArray =[]
//false hobe
console.log(aArray===bArray)


//but true hoto jodi
//eta array khetrew same hobe
console.log(cObj.a===dObj.b)