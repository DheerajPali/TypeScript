
let score: number | string = 33

score = 44;
score = "55";

type User = {
    name : string;
    id : number
}

type Admin = {
    userName : string;
    id : number
}

// you can use multiple types as well 

let dheeraj : User | Admin = {name:"dheeraj", id: 234}

dheeraj = {userName : "abc", id : 344} //totally possible to change parameter according to type...
  


//if you are assigning 2 type then make sure your inside code should be executable for both the types.

function getDBId(id : number | string){
    console.log(id);
}
//both are possible ..
getDBId(4);
getDBId("5")


function getDBId1(id :number | string){
    // id.toUpperCase();            //not possible for input  numbers 
}


function getDBId2(id : number | string){
    if(typeof id === "string"){
        id.toUpperCase()   //it's possible because only string will come inside..
    }
}


const array1 : number[] = [1,2,3] // only numbers
const string1: string[] = ["1", "2", "3"]
const either1: string[] | number[] = [] // can either full numbers / full string only 
//here you can mention all types you want to add..
const both: (string| number | boolean)[] = [3,"3","dfdfd",22,24 ,true]


let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"    //you can not assign this , because it's not added in type.


export {}