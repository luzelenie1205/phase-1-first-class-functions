function receivesAFunction(callback){
        return callback();
}
 
function returnsANamedFunction(){
  let fn =  function(){
        console.log("name")
    }
return fn
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('name')
    }
}