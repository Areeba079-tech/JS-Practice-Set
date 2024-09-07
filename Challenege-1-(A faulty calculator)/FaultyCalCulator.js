
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let val1,val2;
val1=prompt("Enter Value 1 :");
val2=prompt("Enter Value 2 :");
val1=Number(val1);
val2=Number(val2);


let operator;
let result;
operator=prompt("Enter Operation you want to do");
console.log(typeof val1, typeof val2);

let randomNum=getRandomInt(1,100);
console.log("random Number: "+ randomNum);


if(randomNum>10 && randomNum<=100){
switch(operator){
    case '+':
        {
            result=val1+val2;
break;
        }
    case '-':{
        result=val1-val2;
        break;

    }
    case '*':
        {
            result=val1*val2;
        break;
        }
    case '/':
        {
            result=val1/val2;
        break;
        }
    case '**':
        {
            result=val1**val2;
        break;
        }

}
console.log("REsult:"+result);

}

else if (randomNum<=10){

    switch(operator){
        case '+':
            {
                result=val1-val2;
    break;
            }
        case '-':{
            result=val1/val2;
            break;
    
        }
        case '*':
            {
                result=val1**val2;
            break;
            }
        case '/':
            {
                result=val1*val2;
            break;
            }
        case '**':
            {
                result=val1*val2;
            break;
            }
    
    }
    console.log("REsult:"+result);


}
