// singleton 
// when object is created through constructors , then the object formed is singleton but if object is created as a literal then it is not singleton 

// constructor method :singleton 

Object.create

// object literals 

const JS_user={
name:"Areeba",
age:20,
"email adress":"areeba@gmail.com"

}
// accessig object instances with square bracket notation is better then . notation 


console.log(JS_user.name)
console.log(JS_user["email adress"])

// how can we use symbol inside an object ?

var mysymbol=Symbol("key1")



//=========wrong method ========
// const user={
//     name:"Aiman",
//     age:20,
//     email:"aiman@gmail.com",
//     mysymbol:"key1"
//     }

//     console.log(typeof user.mysymbol)


//======== correct method =========
const user={
        name:"Aiman",
        age:20,
        email:"aiman@gmail.com",
        [mysymbol]:"key1"
        }
    
console.log(typeof user[mysymbol])

// typeof mysymbol will return "symbol".
// typeof user[mysymbol] will return "string" because the value associated with the Symbol key is a string.


// adding function in an object

JS_user.greetings=function(){
    console.log("Hello js user")
}

console.log(JS_user.greetings)// it will return only function reference
JS_user.greetings()


// accessing object elements and add functions in it 
JS_user.greetings2=function(){
    console.log(`Hello js user ${this.name}`)
}

JS_user.greetings2()


