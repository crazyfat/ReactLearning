// 继承1 将父类型的实例对象添加到子构造函数的原型上
function Father(){
    this.name = 'father'
}
Father.prototype.say = function(){
    console.log(`i am ${this.name}`);
}
function Son(){
    this.name = 'son';
}
Son.prototype = new Father();
Son.prototype.constructor = Son;
const kid = new Son()
kid.say()

// 继承2 借用父类型构造函数
function F(name){
    this.name = name;
    this.say = function(){ console.log(`hi im ${this.name}`) };
}
function S(name){
    F.call(this, name);
    this.cry = function (){ console.log('wwuwuu') }
}
const k = new S('kid');
k.say()
k.cry()

// 完美的方式：用原型链继承父类原型上的方法 用借用构造函数+call继承父类的属性

let key1 = {a:'1'}, key2 = {a:1}, set = new Set();
set.add({a:'1'})
console.log(set.has({a:'1'}))