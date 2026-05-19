function add(a, b)
{
    
    return a+b
    
}

add // refernec
const result =add(5,"d")// reference with execute
//console.log(`result value ${result}`);


function loginUserMsg(userName="def")
{
    if(!userName)
        return "username is not defined"
    
    return `${userName} just logged in`
    
}
console.log(loginUserMsg());

function calcualte(num1,... data)
{
    return data
}
console.log(calcualte(200,3000,4000));
