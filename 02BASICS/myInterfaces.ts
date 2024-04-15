
interface User {
    readonly dbId : number,
    email : string,
    userId : number,
    googleId ?: string
    //you can define method inside interface ..

    // startTrial: () => string    //first way to define method
    startTrial() : string       // another way to define method   
    getCoupan(coupanname: string , value : number) : number
}


//WHAT IS REOPENING OF INTERFACE? 
// Assigning the parameter again and again is called reopening of interface
//you can add new values whenever you want..

interface User {
    githubToken : string
}


//you can define values in any order ..no issue 
const dheeraj : User = {
    email : "dhee@a.com", 
    userId : 233, 
    dbId : 3334,
    startTrial : () => {
        // return 45         //you can return only defined type in a method..
        return "abc string"
    },
    getCoupan : (name : "dheeraj10" , off: 10) => { //it is not imp to use same parameter name , but imp to use same type 
        coupanname : "firstCoupan"
        let num = 33;
        return 10
    },
    githubToken:"github",
}


//HOW TO EXTEND INTERFACE ??
//you can do it by using extends keyword..

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const abc : Admin = {
    email : "abc@a.com", 
    userId : 33, 
    dbId : 3334,
    startTrial : () => {
        // return 45         //you can return only defined type in a method..
        return "abc string"
    },
    getCoupan : (name : "dheeraj10" , off: 10) => { //it is not imp to use same parameter name , but imp to use same type 
        coupanname : "firstCoupan"
        let num = 33;
        return 10
    },
    githubToken:"github",
    role : "ta"
}

export {}