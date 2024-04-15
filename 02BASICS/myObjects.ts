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



/*

//Here you can define the type like interface
type User = {
    name : string;
    email : string;
    isActive : boolean
}

function createUser(user : User) : User { //here we are using the defined type.
    return {name: "", email:"",isActive:true}
}

createUser({name: "", email:"",isActive:true})
*/


type User = {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean,
    credDetails ?: number, //this is an optional field..
}

let myUser : User = {
    //inside this var. you need to provide all the values
    // which is defined in the type "User"
    _id : "1234",
    name : "dheeraj",
    email : "dfdf@gd.com",
    isActive : false
}

myUser.email = "addv"
// myUser._id = "33434" // here you can not edit _id , because it's readonly



//How to combine (mess)  two types..

type cardNumber = {
    cardNumber : number
}

type cardDate = {
    cardDate : string
}


//Here you can add both the type including extra details like cvv....
type cardDetails = cardNumber & cardDate & {
    cvv : number
}


export {};