function curry(fn){
    console.log('fn:', fn.length)
    return function curried(...args){
        console.log('args: ', args)
        if(args.length>=fn.length){
            return fn.apply(this, args)
        }else{
            return function (...args2){
                return curried.apply(this, args.concat(args2))
            }
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