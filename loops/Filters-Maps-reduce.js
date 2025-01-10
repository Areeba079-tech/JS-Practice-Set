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


const neww=myNums.map((num)=>{return num+10}
)
 console.log(neww)

