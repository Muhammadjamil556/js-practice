const accountId=1234;
let accountEmail="jamil@gmail.com";
var password="jamil123";
accountCity="hunza";
let accountState
console.table([accountId,accountEmail,password,accountCity,accountState])
// accountId=3 //can not be edit because of const data type

accountEmail="dinalyjamil@gmail.com"
password= "1234"
accountCity="pindi"


/* 
note prefer not to use var beacuse of issue in block scope and functional scope 
*/

console.table([accountEmail,password,accountCity])