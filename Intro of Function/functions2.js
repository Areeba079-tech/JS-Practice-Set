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
 
