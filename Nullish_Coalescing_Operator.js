let val1 ;
val1 = 5 ?? 10;

console.log(val1);

//  in some cases when there is a chance of null value we use this operator to reduce thechances of null assignment or in case of null assignment handle this case appropriately 
const arg1=null;
 const arg2= 2;


val2= arg1?? arg2;// if first value is null then assign 2nd value 
console.log(val2);

 
//  same for undefined 
const arg11=undefined;
 const arg12= 20;


val3= arg1?? arg11??arg12;
console.log(val3);
