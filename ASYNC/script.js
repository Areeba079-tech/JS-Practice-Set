


// async function getData(){
// // simulate promise
// return new Promise((resolve,reject)=>{
//     // console.log("running");

//     setTimeout(() => {
//         resolve(455)
//     }, 3000);
// })
// }

// console.log("load module");



// console.log("doing something else");

// //loading background mai hoti rahy gi jb k agy wala kaam nhi ruky ga bcz of promise 
// console.log("loading...");
/*let data=getData();
if we want to stop at this point to wait for loading to complete 
.then approach which is actually a callback approch can be used
data.then((v)=>{
console.log(data);
console.log("process data");

})*/




//  without using callback approach we can use async approach 
// async ka matlb ha k specific function background mai chalta rahy ga 
// for this add "async "keyword before function keyword in the function definition 

/*let data=getData();
console.log(data);
console.log("process data");*/



// async function main(){
//     console.log("load module");



//     console.log("doing something else");
    
//     console.log("loading...");
// // but if we want to wait for the loading first and donot want to use callback approach then we can use await keyword with function call
// // to call await function we have to wrap it in async function  
// let data=await getData();
// console.log(data);
// console.log("process data");}

// main();



//fetch api 

async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1');
   //json for parsing data as javascript object 
   //text for parsing data as text
    // let data=await x.json();
    let data=await x.text();

    console.log(data);



    }



    async function main(){
            console.log("load module");
        
        
        
            console.log("doing something else");
            
            console.log("loading...");
        // but if we want to wait for the loading first and donot want to use callback approach then we can use await keyword with function call
        // to call await function we have to wrap it in async function  
        let data=await getData();
        console.log(data);
        console.log("process data");}
        
        main();
        