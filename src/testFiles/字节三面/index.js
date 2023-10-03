/*
*
* */
function memo(fn){
    let map = new Map();
    return function(...args){
        let s = args.join(' ');
        for(let key of map.keys()){
            if(key === s){
                console.log('memo:', map.get(key));
                return map.get(key);
            }
        }
        let res = fn.apply(this, args);
        map.set(s, res);
        console.log('new memo:', res);
        return res;
    }
}
const add = (a,b)=>a+b;
let f = memo(add);
f(1,2);
f(3,4);
f(1,2);
f(3,4);