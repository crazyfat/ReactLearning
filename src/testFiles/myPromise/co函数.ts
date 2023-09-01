export interface G{
    next: Function,
    value: Promise<any>,
    done: boolean
}
function co(gen: G){
    let nextObj = gen.next();
    if(nextObj.done) return;
    nextObj.value.then(()=>co(gen))
}