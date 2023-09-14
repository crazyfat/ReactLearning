//寄生组合继承
function fa(name){
    this.name = name;
    this.say = ()=>{
        console.log('fa is :', this.name);
    }
}
fa.prototype.sleep = function(){
    console.log('emmm')
}
function ch(name){
    fa.call(this, name);
}
ch.prototype = new fa();
ch.prototype.constructor = ch;

class EventEmitter{
    constructor() {
        this.msg = {}
    }
    $on = function (key, cb){
        if(!this.msg[key]) this.msg[key] = [cb];
        else this.msg[key].push(cb);
    }
    $off = function(key, cb){
        if(!this.msg[key]) return;
        this.msg[key] = this.msg[key].filter(item=>item!==cb)
    }
    $once = function(key, cb){
        function fn(){
            cb();
            this.$off(key, cb);
        }
        this.$on(key, fn);

    }
    $emit = function(key){
        this.msg[key].forEach(item=>item())
    }
}
function _render(vnode){
    if(typeof vnode === 'string'){
        return document.createTextNode(vnode);
    }
    let dom = document.createElement(vnode.tag);
    Object.keys(vnode.attrs).forEach(key=>{
        dom.setAttribute(key, vnode.attrs[key]);
    })
    vnode.children.forEach(item=>{
        dom.appendChild(_render(item));
    })
    return dom;
}
//这个写法更优秀
function objFlatten(obj){
    const res = {}, path = [];
    const backTraking = (obj)=>{
        if(typeof obj !== 'object'){
            res[path.join('.')] = obj;
            return;
        }
        if(Array.isArray(obj)){
            obj.forEach((item, idx)=>{
                let pre = path.pop();
                path.push(`${pre}[${idx}]`);
                backTraking(item);
                path.pop();
                path.push(pre)
            })
        }else{
            Object.keys(obj).forEach(key=>{
                path.push(key);
                backTraking(obj[key]);
                path.pop()
            })
        }
    }
    backTraking(obj);
    return res;
}
const obj = {
    a: {
        b: 1,
        c: 2,
        d: {e: [1,23,3]}
    },
    b: [1, 3, {a: 2, b: 3}],
    c: 3
}
console.log(objFlatten(obj))
function lengthStr(str){
    let idx = 0, map = new Map(), res = 0;
    for(let i = 0; i<str.length; i++){
        let c = str[i];
        if(map.has(c)){
            idx = map.get(c)+1;
            map.delete(c)
        }
        map.set(c, i);
        res = Math.max(res, i-idx+1);
    }
    return res;
}
console.log(lengthStr('pwwkew'))

