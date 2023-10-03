class Scheduler{
    constructor(limit) {
        this.limit = limit;
        this.que = [];
    }
    addTask(time, order){
        const func = (i)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log(order+' in task '+i);
                    resolve();
                }, time);
            })
        }
        this.que.push(func)
    }
    taskStart(){
        for(let i = 0; i<this.limit; i++){
            this.request(i);
        }
    }
    request(i){
        if(this.que.length==0) return;
        let task = this.que.shift();
        task(i).then(
            ()=>{ this.request(i) }
        )

    }
}
let sl = new Scheduler(2);
sl.addTask(1000, 1)
sl.addTask(500, 2)
sl.addTask(300, 3)
sl.addTask(400, 4)
sl.taskStart()
const arr = []
function requeset(){
    if(arr.length==0) return;
    let tmp = arr.shift();
    tmp().then(()=>requeset())
}