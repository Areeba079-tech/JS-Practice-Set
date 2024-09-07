for (let index = 0; index < 10; index++) {
console.log(index);

}

let obj =
{
    name:"Areeba",
    age:20,
    salary:300000
}
for (const key in   obj) {
        const element = obj[key];
        console.log(key,element);

    
}
let string="name"

for (const iter of string) {
    console.log(iter);

}



let array=[1,2,3,4,5];

array.forEach((element,index)=> {
    console.log(index,element);

});

for (const key in array) {
    if (Object.prototype.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(key,element);

        
    }
}
let string1="iterable";

for (const element of array) {
    console.log(element);

}
for (const element of string1) {
    console.log(element);

}
