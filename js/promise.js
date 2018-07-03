var promise = new Promise(function(resolve,reject){
    console.log("Inside promise executor");
    setTimeout(function(){
        console.log("in setTimeout");
        
    },1000);
    resolve('foo');
});
console.log("created promise");
promise.then(function(result){
    console.log("promise returned "+result);
});
console.log("holding promise.then");

// var throwPromise = new Promise(function(resolve, reject) {
//     throw 'value thrown';
//   });
  
//   throwPromise.catch(function(result) {
//     console.log('caught: ' + result);
//   });