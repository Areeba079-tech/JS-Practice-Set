
/*

//dynamically deciding over number 
const score=400;
console.log(score );

// explicitly declaring it as number 

const balance=new Number(100);// defined as object
console.log(balance);// printed as object

// convert a number to string 
console.log(balance.toString());

//to fixed propert is used to fix number of digits after decimal for precision 
console.log(balance.toFixed(2));

//to precision
// in "to precision" method priority is given to the value before decimal 
//example
let num=123.8955;
console.log(num.toPrecision(3) );
// here values before decimal will be prioritized
let num2=1234.8955;// same goes here 
console.log(num2.toPrecision(3) );

// to local string is use to convert numbers to readable numbers formate 
const hundreds=100000000;
console.log(hundreds.toLocaleString());
*/

//________________________________________Maths Librar_________________

console.log(Math);// it is an object having a lot of properties 

//abs : chaning - into +

console.log(Math.abs(-4));
console.log(Math.round(4.55));// round of
console.log(Math.ceil(4.2));// upper value : always gives the upper hand value if any value is present after decimal
console.log(Math.floor(4.75));// lower value : always gives the lower hand value if any value is present after decimal
console.log(Math.sqrt(12).toPrecision(3));
console.log(Math.min(-4,2,-9,6));
console.log(Math.max(2,9,88.2));

console.log(Math.random());// always gives value between 0 and 1

// range definition

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);





