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

/*
    new 操作符 fn为构造函数，args为初始化参数
    1、创建一个空对象
    2、将对象的隐式原型指向构造函数的原型
    3、执行构造函数，其this为新的对象
    4、判断构造函数返回值类型，若是值类型，则直接返回obj。

 */
function myNew(fn, ...args){
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj, args);
    // 要加一个res非null的判断，因为null的type也是object
    if(res && (typeof res === 'object' || typeof res === 'function'))
        return res;
    return obj;
}

//手写promise，先搁置

// 防抖，撤销上一次的请求
function debounce(fn, timeStamp){
    let timer = null;
    return ()=>{
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();
        }, timeStamp)
    }
}

// 节流 上一次请求完成后再进行
function throttle(fn, timeStamp){
    let able = true;
    return ()=>{
        if(able){
            able = false;
            setTimeout(()=>{
                fn();
                able = true;
            }, timeStamp)
        }
    }
}

Function.prototype.myCall = function(obj, ...args){
    obj.fn = this;
    const res = obj.fn(...args);
    delete obj.fn;
    return res;
}
Function.prototype.myApply = function(obj, args){
    obj.fn = this;
    const res = obj.fn(...args);
    delete obj.fn;
    return res;
}
Function.prototype.myBind = function (obj){
    const fn = this;
    return (...args)=>{
        return fn.apply(obj, args);
    }
}
function curry(fn){
    return function curried(...args1){
        if(args1.length<fn.length){
            return (...args2)=>{
                return curried.apply(this, args1.concat(args2))
            }
        }else{
            return fn.apply(this, args1);
        }
    }
}
function sum(a,b,c){
    return a+b+c;
}
const curried = curry(sum);
console.log(curried(1,2)(3), curried(1)(2,3), curried(1)(2)(3))
// 数组求和
let arr = [1,3,4, 4];
let arrSum = arr.reduce((total, val)=>total+=val, 0);
console.log(arrSum)

// 数组扁平化
let arr2 = [1, [2, [3, 43121], 5], 6];
console.log(arr2.toString().split(','));
function flatten(arr){
    let res = [];
    for(let value of arr){
        if(value instanceof Array){
            res = res.concat(flatten(value));
        }else{
            res.push(value);
        }
    }
    return res;
}
function flatten2(arr){
    let res = [];
    for(let value of arr){
        if(value instanceof Array){
            res.push(flatten2(value))
        }else
            res.push(value)
    }
    return res;
}
console.log(flatten(arr2))
console.log(arr2.flat(Infinity))
//数组去重
console.log(Array.from(new Set(arr)))
// 类似push的实现机制
let arr3 = [];
for(let i = 0; i<4; i++){
    arr3[i] = i;
}
console.log(arr3)
// 日期格式化
function dateFormat(date, format){
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    format = format.replace(/yyyy/, year);
    format = format.replace(/MM/, month);
    format = format.replace(/dd/, day);
    console.log(format);
}
dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')
dateFormat(new Date('2020-04-05'), 'yyyy年MM月dd日')

function red(){ console.log('red') }
function green(){ console.log('green') }
const task = (timer, light)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(light=='red')
                red()
            else
                green()
            resolve()
        }, timer)
    })
}
const walk = ()=>{
    task(2000, 'red').then(
        ()=> task(2000, 'green')
    ).then( walk )
}
const step = async ()=>{
    await task(1000, 'red');
    await task(1000, 'green');
    step();
}
//step()

// setTimeout实现setInterval
function myInterval(fn, timeStamp){
    if(!clear){
        setTimeout(()=>{
            fn();
            myInterval(fn, timeStamp);
        }, timeStamp)
    }
    return ()=>{
        clear = true;
    }
}
let clear = false;
// let swh = myInterval(red, 300)
// setTimeout(()=>{
//     swh()
// }, 3000)
arr.reduce((prev, cur)=>prev+cur, 0)
//reduce
Array.prototype.myReduce = function(fn, init){
    for(let i = 0; i<this.length; i++){
        init  = fn(init, this[i]);
    }
    return init;
}
let arr4 = [3, 4, 5]
console.log(arr4.myReduce((prev, cur)=>prev+cur, 10))

