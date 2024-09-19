// multiple ways to create array 
let array1=[1,2,3,true,"areeba"]
let array2=["Hello","World"]
let array3=new Array(0,1,"new")

// printing 
console.log(array1)
console.log(array2)
console.log(array3)

// arrays methods 
array1.push(4)
console.log("Push Method: "+array1)

array2.pop()
console.log("Pop Method: "+array2)
// insert at the start of array
array3.unshift(100)
console.log("Unshift Method: "+array3)

// question type methods 
// return type depends , in some cases boolean , in some cases index number
console.log(array1.includes("Naeem"))
// convert array to comma seprated string 
let newarr=array1.join()
console.log("typeof array1: "+typeof array1+"   "+array1)
console.log("typeof newarray: "+typeof newarr+"  "+newarr)


// slice or splice

// splice manupulates original array but slice doesnot
let arr=[0,1,2,3,4,5]
console.log("Slice :"+arr.slice(1,3))
console.log("Original:"+arr)

console.log("Splice: "+arr.splice(1,3))
console.log("original:"+arr)


