// Single ton object

const newObj=new Object()
console.log(newObj);

newObj.id="12"
newObj.name="saurabh"
newObj.login=false
console.log(newObj);


const user1=new Object()
console.log(user1);

user1.id="122"
user1.name="Vanya"
user1.login=true
console.log(user1);

let obj1={1:"a",2:"b"}
let obj2={3:"a",4:"b"}
let obj3=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj1);
let obj4={...obj1,...obj2}
console.log(obj4);

users=[
    {
        id:"1",
        name:"saurabh",
        "email":"raje@gmail.com"
    },
     {
        id:"1",
        name:"saurabh",
        "email":"raje@gmail.com"
    },
     {
        id:"1",
        name:"saurabh",
        "email":"raje@gmail.com"
    }
]
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(users.hasOwnProperty("email"));
