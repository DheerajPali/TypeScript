//we usually define array like this..
const score : Array<number> = [];
const names : Array<string> = []


//if you are asking for multi types ,then how many types will you define in or condition, 
//and you also need to write condition, like if input is string then return string etc..
function identityOne(val : boolean | number ) : boolean | number {
    return val;
}

//using any , you can give anything ,but it can return anything ,
// like input = number, but output = string...not valid
function identityTwo(val : any ) : any {
    return  val;
}


//Generic is the way to define the value of type in the function
//where it locks the return type based on the input type


function identityThree<Type>(val : Type) : Type {
    return val;
}

//once you pass an input , the value is locked, it will return the same value

identityThree(3); // here func. indetityThree is type number , and returns number.
identityThree("3") // here func. indetityThree is type string , and returns string.
identityThree(true) // here func. indetityThree is type boolean , and returns boolean.

// here you can define your own variable or own type in generic ,like in identityFour()
// it will work same as identityThree.
function identityFour<T>(val:T) : T {
    return val;
}

interface Bottle {
    brand : string,
    type : number,
}
//you can pass here interface and whatever you want ..

identityFour<Bottle>({brand:" ",type:4})  //it will take all the param of interface



//HOW TO DEFINE GENERIC ARRAY..

function getSearchProducts<T>(products : T[]) : T{
    const myIndex = 3;

    //here you are returning 'T'- one element only .
    return products[myIndex]
}

//Arrow function for generic array 
//we just need to add generic after one time ,see the diff btw reular and generic 
// comma ","  after T  as <T,> shows that this is generic not a jsx tag, so no issue to add comma there. because vs code provide suggestion to take it as a tag

const getMore = <T,>(products : T[]) : T =>{
    const index = 2;
    return products[index];
}

//this is regular arrow function without generic 
const regularArrow = (products : number[]) : number =>{
    const index = 2;
    return products[index]
}


//How to extend generics??

/*
function anotherFunction <T,U extends number>(val1 : T , val2 : U) : object{
    return {
        val1,
        val2
    }
}

//it will show error when I'll extend U as number
anotherFunction(3,"4"); 
*/



// Now we'll give it type interface..

interface Database {
    connection : string,
    username : string,
    password: string,
}


function anotherFunction <T,U extends Database>(val1 : T , val2 : U) : object{
    return {
        val1,
        val2
    }
}
//here we need to provide required value of type Database(interface)
anotherFunction(3,{connection: "con",password:"pass",username: "user"});



//HOW TO DEFINE CLASS USING GENERIC.

interface Quiz{
    name: string,
    type: string
}
interface Course {
    name : string,
    author : string,
    subject : string,
}

//this class returns generic type T, and will lock type of T
// then cart will be the same type
// product also will be of same type
class Sellable<T>{
    public cart : T[] = []

    addToCart (product : T){
        this.cart.push(product);
    }
}