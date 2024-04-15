const superHeros: string [] = [] //by default type is never
// const heroPower : number [] = [] 
const heroPower : Array<number> = [] //another way to define type..

superHeros.push("hero1")
heroPower.push(2)


type User = {
    name : string
    isActive : boolean
}

const allUsers : User[] = [] //here you can define type in array...

allUsers.push({name:"dheeraj",isActive:true}); //need to pass the exact User's field

//you can add type 2D Array also 

const MLModels : number[][] = [
    //specially for colors and pixels ...
    [255,255,255],
    [],
    
]




