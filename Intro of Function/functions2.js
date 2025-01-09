 function addnum(num1,num2){
    // console.log(num1+num2);
    return num1+num2;
 }

 addnum(2,3);

 const result = addnum(2,3);
 console.log("Result:",result);

 function loginUser(username){
    if(!username){
        console.log("please eneter name");
        return 
    }
    return `${username} just logged in `;

 }

//  loginUser()
console.log(loginUser())// undefined will be printed because something undefined is return from function 


//=================functions with objects================
 

// use of rest operator to pass and return multiple(donot know the exact number of expected arguments to be passed) instances 
// function calculateCartPrice(...num1){
//     return num1;

// }

function calculateCartPrice(var1,var2,...num1){
    // var1 =200 
    // var2=400 
    // rest of arguments = num1
        return num1;
    
    }
    
console.log(calculateCartPrice(200,400,600,800));

const user={
name: "areeba",
age :21
}

function handleObjet(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);

}

// handleObjet(user);
// directly passing an object 
 handleObjet({
    name:"shehroze",
    age :21
 })


 // ========== function with arrays===========

 const array1=[200,300,400];

 function returnSecondValue(getArray){
    return getArray[1];

 }

 const value = returnSecondValue(array1);
 console.log(value);
 // directky passing 
 console.log(returnSecondValue([1,2,34,4]))



 // ================funstions and  scope ==============

 let a =10// block scope
 const b =20
 {
 var c=30// global scope 
 }

 console.log(a);
 console.log(b);
 console.log(c);



