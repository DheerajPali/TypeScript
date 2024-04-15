
// const user : (string | number) [] = ['hc','abc',1]


//how to define specific type by order, ex- for an api call ...
let tUser : [string,number,boolean] //this is called Tupple
tUser =["hc", 123, true ]

let rgb: [number, number, number] = [255, 123, 122]

type User = [number,string]

const newUser : User = [112, "example@google.com"]
//you can change/override the values..
newUser[1] = "hc.com"
// newUser.push(true)     //you cannot do this ....


export {}