Function.prototype.myCall = function (...args){
    let self = args[0];
    let params = args.slice(1);
    self.fn = this;
    let res = self.fn(params);
    delete self.fn;
    return res;
}
Function.prototype.myApply = function (...args){
    let self = args[0];
    let params = args[2];
    self.fn = this;
    let res = self.fn(...params);
    delete self.fn;
    return res;
}
Function.prototype.myBind = function (...args){
    let self = args[0];
    let params = args.slice(1);
    return function (){
        return this.call(self, params);
    }
}

function Fa(){
    this.name = 'father';
    this.say = function (age){
        return this.name+age;
    }
}
function Son(){
    this.name = 'son';
}
const f = new Fa();
const s = new Son();
console.log(f.say(35)+' '+f.say.myCall(s, 12));
