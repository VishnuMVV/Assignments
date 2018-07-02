
function printHello() {
    var input = 10;
    if(input >= 1 && input <= 10){
        for(var i = 0; i < input ; i++){
            console.log("You entered number is " +input+ " this time <br>");
        }
    }
    else {
        console.log("The number is not in range");
    }
}
printHello();