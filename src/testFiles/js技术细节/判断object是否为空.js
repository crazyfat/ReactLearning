let arr = [1,2,3];
console.log(Object.keys(arr))
const c = '333'
console.log(Object.keys(c))
console.log(Object.prototype.toString.call(arr))
const sy = Symbol('abc')

let obj = {[Symbol('55')]:'234', [c]:6}
console.log(obj)
console.log(sy.valueOf())
console.log(obj.sy)

