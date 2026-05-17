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