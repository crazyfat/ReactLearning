function co(fn){
    const obj = fn.next;
    if(obj.done) return;
    obj.value.then(()=>co(fn));
}
function *myAsync(){
    yield Promise.resolve('1111');
    yield Promise.resolve('2222')
}
const gen = myAsync();
co(gen)