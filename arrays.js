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

// arrays part 2
//difference between concatenate and push 
// push manupulates the same array but concatenate returns new array 
// if some array is push into an array then the pushing array will be considered as single element 

const arr1=[1,2,3]
const arr2=['a','b','c']

// arr1.push(arr2)   // it will take arr2 as a single element 
// console.log(arr1)
// console.log(arr1[3][1])

// concat
// const arr3=arr1.concat(arr2)
// console.log(arr3)


// spread operator(...) : spread each element of the arrays into the new array 

// const arr4=[...arr1,...arr2];
// console.log(arr4)


// concatenate has limitation that it will concatenate only 2 arrays at one time but spread operator can concatenate more than 2 arrays also

// const arr5=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const flat_arr=arr5.flat(Infinity);  //infinity means depth of array : to how much instance we want to flat array
// console.log(flat_arr)


//checking dynamically if data coming in array ?
let namee="Areeba"
console.log(Array.isArray(namee))
// converting anything in an array
console.log(Array.from(namee))
// for object 
//==============intresting case==============
console.log(Array.from({name:"Areeba"}))// "from" can't convert object directly into array 
// we need to mention that create array of keys or create array of values , directly a whole object cannot be converted 

//converting independent values into a single array 
const var1="Areeba"
const var2="aiman"
const var3="riffat"

console.log(Array.of(var1,var2,var3)
)


