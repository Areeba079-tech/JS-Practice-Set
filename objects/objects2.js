const tinderUser=new Object()  // this is singelton object (by constructor)
console.log(tinderUser)

// non singleton object 
const tinderUser1={}
console.log(tinderUser1)

tinderUser1.id="123abc"
tinderUser1.name="Saim"
tinderUser1.isloggedin = true
console.log(tinderUser1)

// nested objects 
const User1={
name:"Areeba",
fullName:{
    first_name:"Areeba",
    Last_Name:"Naeem"
},
nick_name:"Arabs"

}

console.log(User1.fullName)


 const obj1={
    1:"a",
    2:"b"
 }
 const obj2={
    3:"a",
    4:"b"
 }

 //inserting object inside an object 
const obj3={obj1,obj2}
console.log(obj3)

// for merging 2 objects as one object 
//returned_target=Object.assign(target,source)
 const object3=Object.assign({},obj1,obj2)// it is usefull to add empty object while merging because all the objects will merge in the first object which is actually a target object 
console.log(object3)
// if we donot add {}(empty object) then it will be merge in the first object 
// target==returned_target => true 

// spread operator 
const ob3={...obj1,...obj2}
console.log(ob3)