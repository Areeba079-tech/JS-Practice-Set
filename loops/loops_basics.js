//  for loop
// simple
for (let element = 0; element < 10; element++) {
    console.log(element);

    
}

const array=["areeba","hifza","faiq"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
}


// break 
for (let element = 0; element < 10; element++) {
    if (element==5){
    console.log(`value is ${element}`);
break;
}

console.log(element,"Others")

    
}



// continue 
for (let element = 0; element < 10; element++) {
    if (element==5){
    console.log(`value is ${element}`);
continue;
}
console.log(element,"Others")

    
}


// while
 index=0;
 while (index<10){
    console.log(`my value is ${index}`);
    index++;

 }
index=0
 while(index<array.length){
    console.log(`array index :${index} and value ${array[index]}`);
index++
 }

//  do while 
average=30
score=[50,33,20]
i=0
do {
    console.log("pass");
    i++;

    
}while (score[i]>average);
