class Scheduler3{
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
    }
    addTask(fn, time){
        const warp = ()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    fn();
                    resolve();
                }, time);
            })
        }
        this.queue.push(warp);
    }
    doTask(){
        for(let i = 0; i<this.limit; i++){
            this.request();
        }
    }
    request(){
        if(this.queue.length===0) return;
        let p = this.queue.shift();
        p().then(()=>this.request())
    }
}
