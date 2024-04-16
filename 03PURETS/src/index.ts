
console.log("typescript is here still");
console.log("typescript is amazing");

/*

class User {
    email : string 
    private name : string
    city : string = "Ahmedabad" //here given defualt value ,doesnot need to mention if you want default value in constructor
    
    //The defined property in *User* is email,name ..
    // abc, a is just constructor parameters,which will further initialized into email and name. 

    constructor (abc: string , a : string ){
        this.email = abc;
        this.name = a
    }
}

const dheeraj = new User("d@g.com","dheeraj")
// console.log(dheeraj.name) I can not read name here , because it's private..
dheeraj.city = "Bhopal";

*/




class User {
// public : will be accessible in that(where declared) class only 
//protected : will be accesible for the class whihch inherited the proprty of parent class.
    private _courseCount = 1;    
    readonly city : string = "Ahmedabad"   //here given defualt value ,doesnot need to mention if you want default value in constructor
    
    constructor(
        //if you are using access modifier(public/private/protected) , then only 
        //it will take it as class(*User*) Property , otherwise it will take only as constructor Property.
        public email : string, 
        public name : string 
        ){
    }
    //you can define private method also..
    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail() : string {
        return `apple ${this.email}`
    }

    get courseCount() : number {
        return this._courseCount;
    }

    //if you are not defining get courseCount(), and defining set courseCount() method
    //it will ask for the type of courseNum.,otherwise it will take from get method if get is defined..
    // **************************************
    //You can not set any return type in set method...
    set courseCount(courseNum) {
        //there can be any logic, whatever you want ..
        if(courseNum <= 1) {
            throw new Error("Course count must be more than 1")
        }
        this._courseCount = courseNum;
    }
}


//extends keyword is used to import all the proprty of Parent class into Child class
// Only public properties will be accessed from the Child class.
// *SubUser* is Child class, *User* is Parent class
class SubUser extends User {
    ifFamily : boolean = true;
    changeCourseCount(){
        this._courseCount =4;
    }
}

const dheeraj = new User("a@g.com","fhss")
console.log(dheeraj.name);
dheeraj.getAppleEmail;
// dheeraj.deleteToken();  //Error : Property 'deleteToken' is private and only accessible within class 'User'


