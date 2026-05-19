let arrays=[1,2,3,4,5,false]
console.log(arrays[7]);
// arrays copy used shallow copy not deep cody.
// shallow capy have same reference with his parent

let array1=new Array(2,"Sa")
// array1.push("k")
// array1.pop()
array1.unshift(9)
array1.unshift(10)
array1.shift()// pop
console.log(array1)
console.log(array1.indexOf(9));
const array2=array1.join()
console.log(typeof array2);


// slice splice

const myArray=new Array(0,1,2,3,4,5,6)
console.log("orginal",myArray);
console.log(myArray.slice(0,3));
console.log("slice",myArray);
console.log(myArray.splice(0,3));
console.log("splice",myArray);

