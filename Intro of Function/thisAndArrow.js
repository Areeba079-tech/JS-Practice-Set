// function inside an object 
const user={

    name : "Areeba",
    price:999,

    welcomeMessage:function(){
        // 'this' === current context 
        console.log(`${this.name}, welcome to website `);
        console.log(this)
    }
}
 

user.welcomeMessage()
user.name="Shehroze"// changing context
user.welcomeMessage()


console.log(this)// empty braces because there is no context (object)
//  if we run this in brwoser then it will return windows object because it has global context


//  this could only be used in objects because in functions they can not access other objects 
//  example 

function chai(){

    let username="areeba";
    console.log(this);
// some data is returned that means this is actually referncing to something 
console.log(this.username) //returned  undefined because this is referencing nothing 

}

chai()

//  arrow functions 
const coffeee =()=>{
    let username="areeba";
    console.log(this);
    // now here the this will not work because the enviroment is not of object but of function 
}

coffeee()



const funcVar=(num1,num2)=>{
return num1+num2

}

console.log(funcVar(2,5));

// implicit return 
//  donot use "return " keyword and curly braces 

const funcVar2=(num1,num2)=>num1+num2
// or
const funcVar3=(num1,num2)=>(num1+num2)

    
console.log(funcVar2(2,5));


//  for returning object implicitly 

const funcvar4=(var1,var2)=>({user:"areeba"});// used curly braces because oject cannot be returned without curly braces 
console.log(funcVar2(2,5));

