// 
 /*
 primitive data type ==> 
      7 data type 
      call by value
      
      1.string
      2.boolean
      3.null
      4.undefined
      5.symbol == uniquness
      6.number
      7.bigInt
 
 Refenece Type (Non Primitive)
 1. array
 2. objects
 3. functions
 */

 // Java script is dynmic typed  or static typed.
 // Ans: java script is not defined any langauge 

 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id==anotherId)

 const bigIntNumber=2234355455n
  console.log(bigIntNumber)

  const herso=['Ram','shayam','shiva']

  let obj={
    name:"saurabh",
    age:33
  }

  console.log(obj)

  const myfunc=function (){
    console.log("hello")
  }
  console.log(myfunc)


  console.log("symbole data type ",typeof anotherId)
    console.log("array data type ",typeof herso)
        console.log("function data type ",typeof myfunc)


// ********************** Memory

console.log("*************** Learn Memory Stack and HEAP********************");

// STACK and HEAP

// all primeitive data type are used stack memory 
// add non primitive data type are used heap memory

// STACK ===> Alway copy the data. so when changes copy data then its changes the copy data only
// HEAP== always provide the refence. so when changes copy data then its changes the orginal data also

    let name ="saurabh"
    let anotherName=name

    console.log(name);
    console.log(anotherName)

    anotherName="Vanya"
    
      console.log(name);
    console.log(anotherName)

    let userOne={
        name :"saurabh",
        email:"saurabh@Gmail.com"
    }

    let userTwo=userOne
    console.log(userOne.email);
    console.log(userTwo.email);
    userTwo.email="Vanya@gmail.com"
        console.log(userOne.email);
    console.log(userTwo.email);
    
    