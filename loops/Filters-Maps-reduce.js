const myNums=[1,2,3,4,5,6,7,8,9,10]
//  filter is almost similar with for each loop but for each loop doesnot return anything 
//  basically use fir condition base scenerios 

const newnums=myNums.filter((items)=>{
    if (items>4)
    console.log(items)
    else return items

})
//  if we write curly braces write return explicitly otherwise implicit return will happen 
console.log(newnums)

const newnums2=myNums.filter((items)=>items>5)

console.log(newnums2)



// ===============================
const new1=myNums.forEach((num)=>num+10)
console.log(new1) //doesnot return (undefined return )

// map can return a value 
const neww=myNums.map((num)=>{return num+10}
)
 console.log(neww)



//   chaining of methods 
// works like nested loops
const newNUms=myNums
                .map((num)=>num*10 )
                .map((num)=>num+1)
                .filter((num)=>num>-40);

console.log(newNUms);

// ===============reduce =================
//  jo bhi intial value dai gy first iteration mai accumulator mai wohi jay gi 

const array1=[1,2,3]
const total=array1.reduce(function(acc,currentval){
    console.log(`acc:${acc} currentvalue: ${currentval}`);

    return acc+currentval;

},0)

console.log(total);

//  shorter way 
const totalvalues=array1.reduce(
    (acc,current)=> acc+current,0
)

console.log(totalvalues);

// ===============shopping cart example==============
const shoppingCart=[
    {
        itemName:"Js course",
        price :2999
    },
    {
        itemName:"Python course",
        price :999
    },
    {
        itemName:"Mobile app course",
        price :10000
    }
]

const totalResult=shoppingCart.reduce(
   function (acc,item){
    console.log(item.price);
    return item.price+acc


    },0
)

const pricee=shoppingCart.reduce(
    (acc,current)=>
        {

            return acc+current.price
        
        },0
)
console.log(totalResult)
console.log(pricee)

