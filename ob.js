var name = "vidhi";
var mobile = 7878777700;
//Object
var userData = {
    name:"vidhi",
    city:"rajasthan",
    mobile:7878777700
}
//Print Single Value
console.log("My Name is " + userData.name);
//Add Key Value
userData.age = 1;
//Print 
console.log(userData.age);
//print object
console.log(userData);
//Object Convert into String
var a = JSON.stringify(userData);
console.log(a);
//JSON to Parse
var b = JSON.parse(a);
console.log(b);