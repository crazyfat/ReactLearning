function curry(fn){
    return function curried(...args1){
        if(args1.length<fn.length){
            return function (...args2){
                return curried.apply(this, args1.concat(args2));
            }
        }else{
            return fn.apply(this, args1)
        }
    }
}
const add = function (a, b, c){
    return a+b+c;
}
const curried = curry(add);
console.log(curried(1,3)(3))

//再写一遍
function curry1(func){
    return function curried1(...args){
        if(args.length >= func.length)
            return func.apply(this, args);
        else
            return function(...args2){
                return curried1.apply(this, args.concat(args2))
            }
    }

}