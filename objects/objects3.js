//how to destructure objects 
const obj={
    name:"Areeba",
    age:20,
    email:"areeba069@gmail.com"
}

//obj.name ===> instead of using this method of accessing we can destructure the object 

const {email}=obj// now we can email directly instead of using obj.email
 console.log(email)
 // also we can change the name of object elements 
 const {name:fullName}=obj

 console.log(fullName)


 // API's talks 
