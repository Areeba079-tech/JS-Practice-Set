// ================ falsy values ============
//  1. false 
//  2. -0 
//  3.0
//  4.bigint 0n 
// Nan 
//  NUll 
//  undefined 
// "" empty strings 


//  ================true values ==============
//  anything as string is true
// "0"
// 'false'
// " " it has a space inside it 
//  [] empty array
//  { } empty object 
//  function (){} empty function 




//  checks for arrays 

const users=[];
 if (users.length===0){
    console.log("Array is empty");

 }

 const emptyObject ={};

 if (Object.keys(emptyObject).length===0){
    console.log("object is empty ");

 }

//  false ==0 evaluates to true
//  false=='' evaluates to true 
//  0=='' evaluates to true 
