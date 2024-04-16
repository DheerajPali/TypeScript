
interface TakePhoto {
    cameraMode : string
    filter : string
    burst : number
}


//this is the old method to use interface...
/*
class Instagram implements TakePhoto {
cameraMode: string
filter: string
burst: number

    constructor(a : string, b : string , c : number){
        this.cameraMode = a,
        this.filter = b,
        this.burst = c
    }
}
*/

interface Stroy{
   createStroy():void
}

//you must declare all the properties of interface...
//you can use multiple interface in one class.
//also check how to initialize method which has taken from interface.
class Instagram implements TakePhoto ,Stroy{
    constructor(
        public cameraMode :string,
        public filter : string,
        public burst : number
    
    ){}
    
    createStroy(): void {
        console.log("Story was created.");
    }
}

