console.log(null >0 )
console.log (null==0)
console.log(null >=0)


// the reason is that an equalltiy check == and comparision > <> = <= work differently.
//comparision convert null to a number, treating it as 0 . thats why (3) null >= 0 is true and (1) null >0 is fasle


console.log(undefined==0)
console.log(undefined >0)
console.log(undefined<0)


//=== strict check 
console.log ("2"===2)