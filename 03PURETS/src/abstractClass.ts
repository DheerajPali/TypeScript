
//abstract classes are exactly blueprint..
//you can not create objects from it, it's the responsibility(to create obj.) of class who is extending it

abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filer : string
    ){
        
    }
    //you can not define without abstract method inside abstract class
    // getSepia():void 
    abstract getSepia() : void  // can define using abstract ..
    getadf () : string {
        return "abcd";
    }
    getReelTime () : number {
        return 8;
    }

}

//you can not create object instance of an abstract class.
// const dp = new TakePhoto("mode1","filter1");    

//but we can create inherited class from abstract Parent class
class Insta extends TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){
        //need to use super keyword , where need to pass all the required value
        super(cameraMode,filter)
    }
    //we need to define all the abstract methods , to define without abstract 
    getSepia(): void {
        console.log("Sepia");
    }
}

//you can create an object using the class which is inheriting abstract class.
const ab = new Insta ("mode1","filter1",3);

//I can use this method in my object.
ab.getReelTime();