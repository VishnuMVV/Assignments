//array example
var types = ["Basic", "Beginner", "Intermediate"];
console.log(types.push("Advanced"));
console.log(types.length);
console.log(types instanceof Array);//to kow that is an array
console.log(types.toString());
console.log(types);

var colors = ["yellow", "green", "red", "blue"];
console.log(colors.shift());//first element is removed
console.log(colors);
colors.splice(2,0,"pink","orange");//two elements are inserted
colors.forEach(function(item,index,array){
    console.log(index + " " + item);
})
colors.splice(0,1);//first element is removed
console.log(colors);
var c = Math.max(colors.length-1);
console.log(c);

var boys = ["venkat", "sai teja", "Vishnu", "saketh"];
var girls = ["sita", "geeta", "sheela"];
var trainees = boys.concat(girls);
console.log(trainees);

var mobiles = ["xolo", "apple", "moto", "coolpad"];
mobiles.sort();
mobiles.pop();
console.log(mobiles);


var values = [100,45,2.5,35,92,11,5];
values.sort();
console.log(values);
var v = values.sort(function(a,b){return a-b});
console.log(v);
console.log(Math.min.apply(null,values));


var z = ["a","b","c","d","e"];
var 