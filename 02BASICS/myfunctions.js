"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() //you can not do this with number
    return num + 2;
    // return "hello"; //this will not give you any error before defining return type..
}
addTwo(5);
function getUpper(val) {
    val.toUpperCase();
}
var abc = getUpper("abcd");
// getUpper(4); //you can not do this 
function signUpUser(name, email, isPaid) { }
signUpUser("Dheeraj", "abc@google.com", false);
//Here we are giving default value to isPaid as false, now if we'll not give it's value 
//then it will take false by default..
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid == void 0) {
        isPaid = false;
    } //another way to make default value
};
loginUser('abc', 'abc@google.com'); //it will take isPaid = false by default..
// function getValue(myVal : number) : boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok" //will give error...it expects return type boolean.
// }
var getHello = function (s) {
    return " ";
};
var heros = ["Thor", "Spiderman", "Ironman"];
// const heros = [1,2,3]  
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// how to handle errors 
function consoleError(errmsg) {
    console.log(errmsg);
}
;
function handleError(errmsg) {
    throw new Error(errmsg);
}
