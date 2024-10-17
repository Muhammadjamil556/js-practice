// premitive data types

// 7 types:sting , number, boolean, null ,undefined ,symbol ,BigInt



//symbol 
const id =Symbol("1234")
const anotherId= Symbol("1234")

console.log (id === anotherId)

// reference (Non premitive)

//array, objects, functions 


const hero =["iron man ","baat man ","sidpermain"]
let myObj ={
    name:"jamil",
    id :"12345",
}


const myFunction =()=>{
console.log("my function")
}

const fun = function(){
    console.log("my function")

}
myFunction();
fun()