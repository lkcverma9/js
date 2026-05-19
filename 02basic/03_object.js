// singleton -- make vis constrctor 
// if make via literal then its not singalton

const obj1={} // via literales
//const obj2=Object.create()

const mySym =Symbol("sd")
const obj3={

    name:"saurabh",
    email:"sau@fm.com",
    lastLoginDate:[1,2,3],
    "full name":"saurabh varma",
    [mySym]:"dsd"
}


// console.log(obj3.email);
// console.log(obj3["email"]);
// console.log(obj3["full name"]);
// console.log(obj3[mySym]);
// console.log(obj3.mySym);


obj3.gre=function()
{
    console.log("hello js user ");
     console.log(`hi,${this.name}`);
    
}
console.log(obj3.gre);
console.log(obj3.gre());