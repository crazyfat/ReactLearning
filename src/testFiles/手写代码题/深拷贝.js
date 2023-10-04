function deepClone(obj, hash = new WeakMap()){
    if(obj === null) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj !== 'object') return obj;
    if(hash.has(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
let obj = {
    a:1,
    b:2,
    c:3
}
Object.prototype.myName = ()=>{}
for(let key in obj){
    console.log('key: ', key);
}
