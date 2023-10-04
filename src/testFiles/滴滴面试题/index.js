// 多个promise按顺序执行
function func(promises){
    const res = [];
    const doP = ()=>{
        if(promises.length===0) {
            console.log(res)
            return res;
        };
        let p = promises.shift();
        p.then((v)=>{
            res.push(v);
            doP();
        },
            (r)=>{
            res.push(r);
            doP();
            })
    }
    doP();
}
let p1 = new Promise((resolve, reject)=>{
    console.log('p1');
    resolve('p1');
})
let p2 = new Promise((resolve, reject)=>{
    console.log('p2');
    reject('p2');
}).catch(e=>console.log(e))
let p3 = new Promise((resolve, reject)=>{
    console.log('p3');
    resolve('p3');
})
let ps = [p1, p1, p3];
//func(ps);
// promise测试
// let mu = new Promise((resolve, reject)=>{
//     console.log('error');
//     reject('error');
// }).then(()=>{},(e)=>{console.log(e)})

// setTimeout实现setInterval
function myInterval(fn, time){
    let clear = false;
    const ff = ()=>{
        if(!clear){
            setTimeout(()=>{
                fn();
                ff(fn, time);
            }, time);
        }
    }
    ff()
    return ()=>{clear = true};
}
// let turnOff = myInterval(()=>{console.log('111')}, 100);
// const t = setTimeout(()=>{
//     turnOff()
// }, 1000)
// console.log(typeof t)
setInterval(()=>{
    console.log('666')
}, 2000)
