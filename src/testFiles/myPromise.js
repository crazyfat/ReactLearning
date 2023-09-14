const f1 = async ()=>{
    const value = await f3().catch(err => {console.log(err+'err')});
    console.log(value);
}
const f2 = ()=>{
    return new Promise((resolve, reject)=>{
        //resolve('success');
        reject('failure');
    }).then(
        value => { return value },
        reason => { return Promise.reject(reason) }
    )
}
const f3 = ()=>{
    return Promise.reject('1111');
}
f1();

function pSome(promises){
    return new Promise((resolve, reject)=>{
        let cnt = 0, len = promises.length, res = [];
        for(let i = 0; i<promises.length; i++){
            let tmp = Promise.resolve(promises[i]);
            tmp.then(
                value=>{
                    resolve(value);
                },
                reason => {
                    res.push(reason);
                    cnt++;
                    if(cnt===len){
                        reject(res);
                    }
                }
            )
        }
    })
}