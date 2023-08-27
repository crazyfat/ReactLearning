// Object.create
function myObjectCreate(proto){
    const F = function (){};
    F.prototype = proto;
    return new F();
}
/*
    instanceOf a的原型链上是否出现B的原型
    注意 Object.getPrototypeOf是获取对象的隐式原型
 */
function myInstanceOf(a, B){
    const proto = B.prototype;
    let __proto = Object.getPrototypeOf(a);
    while(__proto!==null){
        if(__proto === proto) return true;
        __proto = Object.getPrototypeOf(__proto);
    }
    return false;
}
const a = {};
const b = function(){};
console.log(Object.getPrototypeOf(a) === a.__proto__)
console.log(Object.getPrototypeOf(b) === b.prototype)