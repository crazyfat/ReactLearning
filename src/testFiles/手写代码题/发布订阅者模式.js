class Observer{
    constructor() {
        this.msg = {}
    }
    $on(type, cb){
        if(!this.msg[type]) this.msg[type] = []
        this.msg[type].push(cb)
    }
    $off(type, cb){
        if(!this.msg[type]) return;
        if(!cb){
            this.msg[type] = undefined;
            return;
        }
        this.msg[type] = this.msg[type].filter((callback)=> callback !== cb);
    }
    $emit(type){
        if(!this.msg[type]) return;
        this.msg[type].forEach(callback=>{
            callback();
        })
    }
}
function handleA(){
    console.log('aaa')
}
function handleB(){ console.log('bbb') }
const ob = new Observer()
ob.$on('csl', handleA);
ob.$on('csl', handleB);
ob.$emit('csl');
ob.$off('csl', handleB)
ob.$emit('csl')