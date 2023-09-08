class A{
    constructor() {
        this.x = 1;
    }
    print(){
        console.log(`${this.x}`)
    }
}
class B extends A{
    constructor(props) {
        super(props);
        this.x = 2;
    }
    m(){
        super.print()
    }

}
var b = new B();
//b.m()
let a = 'asd';
let obj = {
    [a]:true,
    ['a'+'bc']:123
}

class Print{
    constructor(x,y) {
        Object.assign(this,{x,y})
    }

}
let p = new Print(1,2)
//console.log(p.x, p.y)
let s = 'hello word'
console.log(s.startsWith('word', 6), s.endsWith('hello', 5))
console.log(s.includes('hello', 6))
console.log('x'.padStart(4), 'x'.padStart(4,'0'))