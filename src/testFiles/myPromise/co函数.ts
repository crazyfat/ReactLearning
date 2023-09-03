export default interface G{
    next: Function,
    value: Promise<any>,
    done: boolean
}
function co(gen: G){
    let nextObj = gen.next();
    if(nextObj.done) return;
    nextObj.value.then(()=>co(gen))
}
// gen实现斐波那契数列
function *fi(a:number, b:number){
    yield a+b;
    fi(b, a+b);
}
const gen = fi(0, 1);
for(let i = 0; i<10; i++){
    console.log(gen.next());
}