let p1 = function (){
    return new Promise((resolve, reject)=>{
        console.log('p1');
        resolve('p1');
    })
}
let p2 = function (){
    return new Promise((resolve, reject)=>{
        console.log('p2');
        setTimeout(()=>{
            resolve('p2');
        }, 3000)
    })
}
let p3 = function(){
    return new Promise((resolve, reject)=>{
        console.log('p3');
        resolve('p3');
    })
}
let ps = [p1, p2, p3];
//func(ps);

function doP(promises){
    const req = ()=>{
        if(promises.length === 0) return;
        let p = promises.shift();
        p().then(()=>req());
    }
    req();
}
doP(ps);