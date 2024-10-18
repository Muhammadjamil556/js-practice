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






//++++++++++++++++++++++++++Memory types +++++++++++++++++


//stack (premitive) , heap (non premetive )

let name ="jamil";
let fullName =name;
fullName="muhammad jamil"

// console.log(name)
// console.log(fullName)


const userOne ={
    email:"jamiil@gmail.com",
    id:"12334"
}

const userTwo =userOne


userOne.email="jamiljamil@gmail.com"

console.log(userOne);

console.log(userTwo);