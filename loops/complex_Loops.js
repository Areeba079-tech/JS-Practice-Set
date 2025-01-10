
//  for of loop on array
const array=[1,2,3,4,5]
for (const iterator of array) { // here object means on what type of object you want to iterate , either array or objects or strings 
    console.log(iterator)
}


//  for of on strings 
const greetings ="hello"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
    
}

//  for of iteration on maps 
const map = new Map()// map is object having unique key value pair values 
map.set('IN',"India");
map.set('Pak',"Pakistan");
map.set('Pak',"Pakistan");
map.set('US',"United states")
console.log(map)


for (const iterator of map) {// this single iterator will print whole map 

    console.log(iterator)
    
}
for (const [key,value] of map) {// to use key and value seperately we use this 

    console.log(key)
    
}


//  for of loop on object 
const myobj={
    'name':'Areeba',
    'age':21
}

// for (const iterator of myobj) {
//     console.log(iterator)
    
// }

//  so objects in js are not iteratable by for of loop



// ============== for in loop===============
// object
for (const key in myobj) {
   console.log(`key : ${key} value :${myobj[key]}`);

}

// array
for (const index in array) {
    console.log(array[index]);

}
// map
// map is not iteratable by for in loop 

for (const key in map) {
    console.log("map ")
    console.log(key)

}

// =======================for each loop(higher order function)================

array.forEach( function(iterator){
console.log("in for each")
    console.log(iterator)
})


//  by arrow function 
array.forEach((iterate)=>{
    console.log("in for each-arrow function")
    console.log(iterate)
})


function greet(val){
    console.log("hey ",val)
}

array.forEach(greet)
//  3 parameters available in for each loop 

array.forEach((value, key , array)=>{
    console.log(value, key, array)
})



//  array of objects 

const mycoding=[
    {
        languageName:"javascript",
        file:"js"

    }
    ,{
        languageName:"java",
        file:"java"
        
    },{
        languageName:"python",
        file:"py"
        
    }
] 


mycoding.forEach((value,index)=>{

    console.log(`${value.languageName}  ${value.file}`);


})
 
