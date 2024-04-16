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

