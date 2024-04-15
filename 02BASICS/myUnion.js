var score = 33;
score = 44;
score = "55";
// you can use multiple types as well 
var dheeraj = { name: "dheeraj", id: 234 };
dheeraj = { userName: "abc", id: 344 }; //totally possible to change parameter according to type...
//if you are assigning 2 type then make sure your inside code should be executable for both the types.
function getDBId(id) {
    console.log(id);
}
//both are possible ..
getDBId(4);
getDBId("5");
function getDBId1(id) {
    // id.toUpperCase();            //not possible for input  numbers 
}
function getDBId2(id) {
    if (typeof id === "string") {
        id.toUpperCase(); //it's possible because only string will come inside..
    }
}
var array1 = [1, 2, 3]; // only numbers
var string1 = ["1", "2", "3"];
var either1 = []; // can either full numbers / full string only 
//here you can mention all types you want to add..
var both = [3, "3", "dfdfd", 22, 24, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"    //you can not assign this , because it's not added in type.
