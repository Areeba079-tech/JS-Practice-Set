//    global scope k varibales sy kafi baar problem ho jati hia inside our desired function 
//  to secure our functions from pollution we use IIFE 
//  also if we want to run some function immediately as soon as application starts for example Database connection fucnction 
//  then we use IIFE

// IIFE== immediately invoked function expressions 

(function chai(){
    //  this is a named IIFE
    console.log(`DB connected`);

})();// syntax to immediately invoke a function 

//  in this context if we donot write the semicolo  after IIFE then it will trough error in many caes because it doenot know where to stop 
//  if we put ; then it will stop here and proceed next successfully 

//  we can also write this as an arrow function 

(
    (name)=>{
        //  this is unnamed IIFE
    console.log(`DB connected ${name}`);

}
)("areeba")     // these last brackets are used for calling the function , if we want to pass some arguments we can pass here 


//  for 2 IIFE run in a same file the first IIFE should end with semicolon 
