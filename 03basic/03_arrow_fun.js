const user={

    userName:"saurabh",
    price:233,
    welcomeMessage : function()
    {
        console.log(`Hi ${this.userName} , welcome to group`)
        console.log(this);
    }
}
//console.log(user.welcomeMessage);
    // user.welcomeMessage()
    // user.userName="saur"
    // user.welcomeMessage()


function chai()
{
    console.log(this);
    
}
//chai()

const chai1=function(){
    username="ds"
     //console.log(this.userName);
     console.log(this);
}
//chai1()


// arroe function
const chai2=()=>{
    username="ds"
     //console.log(this.userName);
     console.log(this);
}
//chai2()

const addTwo=(num1,num2)=>{

    return num1+num2
}

const addTwo1=(num1,num2)=> num1+num2

const addTwo3=(num1,num2)=> (num1+num2)

// console.log(addTwo(1,2))
// console.log(addTwo1(1,2))
// console.log(addTwo3(1,2))

// IIFE (Immediately Invoked Function Expression)

;(
    function dbConnection(){
console.log("dsdd")

})();

( (name)=>{
console.log("dsdd",name)

})("sau")


