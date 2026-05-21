// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // FOR OF Loop

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let element of arr) {
//     console.log(element);
// }

// // for each
// arr.forEach(function(element) {
//     console.log(element);
// });

// Map
const newMMap= new Map();
newMMap.set("in","india");
newMMap.set("US","USA");
newMMap.set("UK","United Kingdom");
for (const [key,value] of newMMap)
{
    console.log(key);
}


const myObj= 
{
    name:"Saurabh",
    age:32,
    city:"Delhi"
}
for (const [key,value] of Object.entries(myObj))
{
    console.log(key);
}

for (const key in myObj)
{
    console.log(key);
}

for (const key in myObj) {
    console.log(myObj[key]);
    
}
