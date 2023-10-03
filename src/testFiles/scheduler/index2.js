class Scheduler{
    constructor(n) {
        this.limit = n;
        this.taskQue = [];
    }
    addTask(time, order){
        const func = (i)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    console.log('task: '+i+' order: '+order);
                    resolve();
                }, time)
            })
        }
        this.taskQue.push(func);
    }
    runTask(){
        for(let i = 0; i<this.limit; i++){
            this.request(i);
        }
    }
    request(i){
        if(!this.taskQue.length) return;
        let task = this.taskQue.shift();
        task(i).then(()=>this.request(i));
    }
}
let s = new Scheduler(2);
s.addTask(1000,1)
s.addTask(400, 2)
s.addTask(700, 3)
s.addTask(200, 4)
s.runTask()