const accountId=12345;
let accountEmail="saurabh@gmail.com"
var accountPassword="1234"
accountCity="Azamgarh"
// accountId=123 // not allowed

accountEmail="vanya@gmail.com"
accountPassword="123232"
accountCity="Varanasi"



/*
Prefered not used to var.
because issue of block scope and functional scope issue
*/

let accountState;
console.log(typeof(accountCity));
console.log(typeof(accountState));
console.log(typeof(accountId));


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);