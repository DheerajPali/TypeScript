function addTwo(num:number) : number{
    // num.toUpperCase() //you can not do this with number
    return num + 2; 
    // return "hello"; //this will not give you any error before defining return type..

}
addTwo(5);

function getUpper(val : string){
    val.toUpperCase();
}

let abc = getUpper("abcd");
// getUpper(4); //you can not do this 

function signUpUser(name : string,email : string, isPaid : boolean){}
signUpUser("Dheeraj","abc@google.com",false);

//Here we are giving default value to isPaid as false, now if we'll not give it's value 
//then it will take false by default..
var loginUser = function(name : string ,email : string ,isPaid : boolean = false){
    if(isPaid == void 0){isPaid=false} //another way to make default value
}

loginUser('abc','abc@google.com'); //it will take isPaid = false by default..

// function getValue(myVal : number) : boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok" //will give error...it expects return type boolean.
// }

const getHello = (s : string) : string => {
    return " ";
}

const heros = ["Thor","Spiderman","Ironman"]
// const heros = [1,2,3]  

heros.map((hero) : string =>{ // the type of hero will automatically define by const hero..
    return `hero is ${hero}`
})

// how to handle errors 

function consoleError(errmsg : string) : void{
    console.log(errmsg);
};

function handleError(errmsg : string) : never {
    throw new Error(errmsg);
}





export {}