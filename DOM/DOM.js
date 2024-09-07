// document.body.childNodes[1];
// document.getElementById("box1").style.backgroundColor="purple";


// document.getElementById("redbox").style.backgroundColor = "red"

// console.log(document.body.children);
// console.log(document.body.children[0].children);

// console.log(document.body.firstElementChild.firstElementChild);

// document.body.firstElementChild.firstElementChild.style.backgroundColor="purple";

// document.body.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="yellow";

// let boxess = document.getElementsByClassName("boxes")
// console.log(boxess);
// console.log(document.querySelector(".boxes"));
// console.log(document.querySelectorAll(".boxes"));

let boxes=document.getElementsByClassName("box");


// for (const box of boxes) {
//     
//     box.style.border = "2px solid yellow";
// }

for (let i = 0; i < boxes.length; i++) {
    if(i==1){
        boxes[i].style.border = "2px solid black";

    }
    else
    boxes[i].style.border = "2px solid yellow";
}


document.getElementById("box1").style.backgroundColor="purple";
document.getElementById("box2").style.backgroundColor="red";
document.getElementById("box3").style.backgroundColor="green";
document.getElementById("box4").style.backgroundColor="blue";
document.getElementById("box5").style.backgroundColor="magenta";



