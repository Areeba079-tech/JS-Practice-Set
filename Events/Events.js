let btn1=document.getElementById("btn1");
// btn1.addEventListener("mouseover",()=>{
//    btn1.style.backgroundColor="green";
//    btn1.style.border="2px solid green";
   
// })
btn1.addEventListener("click",()=>{
   btn1.style.backgroundColor="rgb(123, 123, 199)";
   btn1.style.border="2px solid red";
   alert("opps 1st button is clicked");
   window.open("https:\\www.instagram.com")



})




let btn2=document.getElementById("btn2");
btn2.addEventListener("dblclick",()=>{
   alert("opps 1st button is clicked");

window.location.href="https:\\www.google.com";// open in current tab 


})
let btn3=document.getElementById("btn3");
btn3.addEventListener("dblclick",()=>{
btn3.classList.toggle("bulb");



})