"use strict";
/*

const User = {
    name : "dheeraj",
    email : "dheeraj@google.com",
    isActive : true
}

function createUser({name: string, isPaid : boolean}){}

createUser({name : "dheeraj", isPaid : false})
// createUser({name:"a",isPaid:false,email:"add@g.com"}); //you can not pass more infor like email, in this way


//there is a way to pass extra info then expected..

let newUser = {name : "dheeraj", isPaid : false, email : "abc@a.com"}
createUser(newUser);


function createCourse():{name : string, price : number}{
    return {name:"reactJs", price : 99}
}

*/
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    //inside this var. you need to provide all the values
    // which is defined in the type "User"
    _id: "1234",
    name: "dheeraj",
    email: "dfdf@gd.com",
    isActive: false
};
myUser.email = "addv";
