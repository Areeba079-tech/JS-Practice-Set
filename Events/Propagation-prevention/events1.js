//  js is a sequentially run programming but events only run because of something happening 
//  event can be called from anywhere
 
// javascript injected in the html tags is not a scalable approach 

const owl=document.getElementById('japan').onclick=function(){
    alert('japan is clicked');

}// this is also not a good approach because it returns less features 

//  best approach 

document.getElementById('owl').addEventListener('click',function(){alert('clicked by event listner');
},false)// 3rd parameter false is default , so we generally donot write it

//  attachEvent()
// jquery - on 

document.getElementById('river').addEventListener('click',function (e){
    console.log(e);// prints pointer events 
    // it also holds browser and enviroments type events 
    //  like where the mouse was clicked 
    //  when yu clicked what was the height and width of the screen ?
    //  when the mouse clicked what was the time ?
    //  these type of things can be extracted from the simple javascript events 

})

// type , time , defaultPrevented(stop default behaviour of any tag)
// target, toElement, srcElement, currentTarget,
// clientX, clientY , screenX , screenY,
// altkey,ctrlkey,shiftkey, keyCode

// ===================event propagation================


//  true == ecent capturing 
//  false == event bubbling 

// If we donot want to propagate 
// Then you stoppropagation 




//  parent - outer element 
document.getElementById('images').addEventListener('click',function (e){
    console.log("click inside the images ");
},false)// false for bubbling 

document.getElementById('photoshop').addEventListener('click',function (e){
    console.log("click on photoshop");
    
},false//,true
)

//  for capturing turn 3rd parameter  into true 


document.getElementById('prayer').addEventListener('click',function (e){
    console.log("click on prayer");
    e.stopPropagation();// there will be no capturing or bubbling now 
    // outer element is not ssepertaed from inner element 


},false//,true
)



//  prevent default changes the default behaviour 
//  as if we click on a link its default behaviour is to open a new tab but if 
//  write preventDefault then it will change the default behaviour of the link 



document.getElementById('google').addEventListener('click',function(e){
    // e.preventDefault();


    console.log("google is clicked");
},false)



// ===============Example ================
//  whenever we click on an element just remove it from the screen 

// const element=document.querySelector('#images').addEventListener
// ('click',function(e){
//     console.log(e.target.parentNode);// target :from which target the event is being listned 
// let removeIT=e.target.parentNode;
// // removeIT.remove();
// removeIT.parentNode.removeChild(removeIT);// both of these methods are same 
// //  in this method , if we click on the pictures , the li element  will be deleted bcz we are targeting the parent node 
// //  but if we click on the li bullets directly it will ul becayse here the parent of li is ul 
// // / to reslve this we need to add some extra checks 

// },false);



//  method with checks 

const element=document.querySelector('#images').addEventListener
('click',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName=='IMG'){
        console.log(e.target.id);

        let removeIT=e.target.parentNode;
        removeIT.remove();
    }



},false);
