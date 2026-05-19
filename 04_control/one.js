if(2=="2")
{
    console.log("if double equal");
    
}
else
{
    console.log("elsedouble equal");
    
}


if(2==="2")
{
    console.log("if triple equal");
    
}
else
{
    console.log("else triple equal");
    
}


/* falsy value
0,false,-0 BigInt 0n,"", null, undefined,Nan
*/

/* 
truthy value
"0",'false'," ",[],{} function(){}
*/

const array1=[]

if(array1.length===0)
{
    console.log("empty");
    
}


//nullish coalescing operator
let num1=5??10
console.log(num1);

let num2=null??10
console.log(num2);
