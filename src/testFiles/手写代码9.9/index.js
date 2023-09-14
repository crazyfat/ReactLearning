const myThen = (onResolved, onRejected) =>{
    return new Promise((resolve, reject)=>{
        // 该promise状态由on两个回调决定
        let self = this;
        let fulfilled = ()=>{
            let res = onResolved(self.value);
            if(res instanceof Promise){
                res.then(resolve, reject)
            }else{
                resolve(res)
            }
        }
        let rejected = ()=>{
            //同理
        }
        switch (self.status){
            case 'pending':
                self.resolvedCb.push(fulfilled);
                break;
            case 'resolved':
                fulfilled()
        }
    })
}
//防抖节流绑定一个this
function curry(fn){
    return function curried(...args){
        if(args.length === fn.length){
            return fn.apply(this, args)
        }else{
            return (...args2)=>{
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
function add(a,b,c){
    return a+b+c;
}
let curried = curry(add);
console.log(curried(1)(2, 3))

function shallowCopy(obj){
    if(!obj || typeof obj !== 'object') return;
    const res = Array.isArray(obj)? []:{};
    for(let key in obj){
        res[key] = obj[key];
    }
    return res;
}
function deepCopy(obj){
    if(!obj || typeof obj !== 'object') return obj;
    const res = Array.isArray(obj)? []:{};
    for(let key in obj){
        res[key] = deepCopy(obj[key]);
    }
    return res;
}
let obj = {
    a:{
        b:23,
        c:[1,3, {k:9}, [2,3]]
    }
}
let sc = shallowCopy(obj);
let dc = deepCopy(obj)
obj.a.c[2] = 99
console.dir(sc)
console.dir(dc)

const source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]
function joinTree(arr){
    let map = new Map();
    for(let value of arr){
        map.set(value.id, value)
    }
    let res = [];
    for(let value of arr){
        const fa = map.get(value.pid);
        if(fa){
            if(fa.children){
                fa.children.push(value)
            }else{
                fa.children = [value]
            }
        }else
            res.push(value)
    }
    return res;
}
console.log(joinTree(source))