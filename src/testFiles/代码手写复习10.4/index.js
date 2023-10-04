//  promise.then
function then(resolved, rejected){
    return new Promise((resolve, reject)=>{
        const self = this;
        const onFulfilled = ()=>{
            let res = resolved(self.value);
            if(res instanceof Promise){
                res.then(resolve, reject)
            }else{
                resolve(res);
            }
        }
        const onRejected = ()=>{
            let res = rejected(self.value);
            if(res instanceof Promise){
                res.then(resolve, reject)
            }else{
                resolve(res)
            }
        }
        switch(self.status){
            case 'pending':
                self.onFulfillCallback.push(onFulfilled);
                /*类似的*/
            case 'resolved':
                onFulfilled();
        }
    })
}
function deepCopy(obj, hash = new WeakMap()){
    if(obj === null) return obj;/*包含了null和undefined类型*/
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj !== 'object') return obj;
    /*object类型 包括了数组和对象*/
    if(hash.has(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepCopy(obj[key], hash);
        }
    }
    return cloneObj;
}
//改变this指向的几个关键词
Function.prototype.myCall = function(...args){
    if(typeof this !== 'function'){
        throw new TypeError('调用对象必须为函数');
    }
    const self = args[0];
    const args2 = args.slice(1);
    const fn = Symbol('key');
    self[fn] = this;
    const res = self[fn](args2);
    delete self[fn];
    return res;
}
Function.prototype.myApply = function(...args){
    if(typeof this !== 'function'){
        throw new TypeError('调用者为函数');
    }
    if(!Array.isArray(args[1])){
        throw new TypeError('第二个参数必须为数组');
    }
    const self = args[0];
    const args2 = args[1];
    const fn = Symbol('key');
    self[fn] = this;
    const res = self[fn](...args2);
    delete self[fn];
    return res;
}
Function.prototype.myBind = function(...args){
    if(typeof this !== 'function'){
        throw new TypeError('调用者为函数');
    }
    const self = this;
    const context = args[0];
    const args1 = args.slice(1);
    return function fn(...args2){
        if(this instanceof fn){
            return new self(...args1, ...args2);
        }else{
            return self.call(context, ...args1, ...args2)
        }
    }
}
class Union{
    constructor(n) {
        this.size = n;
        this.setSize = n;
        this.fa = [];
        for(let i = 0; i<this.size; i++) this.fa[i] = i;
    }
    find(u){
        if(this.fa[u] === u) return u;
        this.fa[u] = this.find(this.fa[u]);
        return this.fa[u];
    }
    merge(x,y){
        let fx = this.find(x);
        let fy = this.find(y);
        if(fx === fy) return;
        this.fa[fx] = fy;
        this.setSize--;
    }
}
// 格式化日期
function formatDate(date, format){
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    format = format.replace(/yyyy/,year);
    format = format.replace(/MM/, month);
    format = format.replace(/dd/, day);
    console.log(format);
    return format;
}
formatDate(new Date('2020-12-01'), 'yyyy/MM/dd')
formatDate(new Date('2020-04-05'), 'yyyy年MM月dd日')
console.log(new Date('2022-09-09'))

//render
function _render(vnode){
    if(typeof vnode === 'number') vnode = String(vnode);
    if(typeof vnode === 'string') return document.createTextNode(vnode);
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs){
        for(let key in vnode.attrs){
            if(vnode.attrs.hasOwnProperty(key)){
                dom.setAttribute(key, vnode.attrs[key]);
            }
        }
    }
    for(let child of vnode.children){
        dom.appendChild(_render(child))
    }
    return dom;
}

//快排
function partition(arr, left, right){
    const pivot = arr[Math.floor(left/2+right/2)];
    while(left<=right){
        while(arr[left]<pivot) left++;
        while(arr[right]>pivot) right--;
        if(left<=right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}
function qs(arr, left, right){
    const index = partition(arr, left, right);
    if(left<index-1)
    qs(arr, left, index-1);
    if(index<right)
    qs(arr, index, right)
}
let arr2 = [3,5,78,213,4,3,1,32,23,4,2,7,34]
qs(arr2, 0, arr2.length-1);
console.log(arr2)