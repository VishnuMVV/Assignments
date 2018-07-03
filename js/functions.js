//basic function calling
function  mul(a,b) {
    return a * b;
}
var x = mul(2,3);
console.log(x);


//self invoking function
(function() {
    console.log("This is a self function calling");
})();


//functions with arguments name
mx = findmax(1,23,-42,197,0,22621,65);
function findmax() {
    var max = 1000;
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
console.log(mx);


//objects calling
var myObject = {
    firstName:"Vishnu",
    lastName: "Mamidi",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var nm = myObject.fullName(); 
console.log(nm);


//Call and Apply methods
var idiot = {fullname: function(){
    return this.firstName + " " + this.secondName;
}}
var idiot1 = {firstName:"dolph",secondName:"Ziggler"};
var idiot2 = {firstName:"AJ",secondName:"Styles"};
var resCall = idiot.fullname.call(idiot1);
var resApply = idiot.fullname.apply(idiot2);
console.log(resCall);
console.log(resApply);


// Closure Function
console.log(add());
function add() {
    var count = 0;
    function plus() {
        count += 1;
    }
    plus();    
    return count; 
}


// Constructor function for Person objects
function group(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}
var myFriend = new group("saketh", "Don", 22, "brown");
var out = "My friend is " + myFriend.name(); 
console.log(out);


//prototype for objects
function crew(first,last,titlee) {
    this.firstName = first;
    this.secondName = last;
    this.titlee = titlee;
}
crew.prototype.area = "ind";
crew.prototype.name = function(){
     return this.firstName + " " + this.secondName;
}
var threw = new crew("sweety", "dolly", "X");
console.log("name is "+threw.name());


