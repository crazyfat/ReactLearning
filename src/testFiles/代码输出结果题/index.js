Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})
const promise2 = promise1.then(() => {
    throw new Error('error!!!')
}).catch()
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
    console.log('promise1', promise1)
    console.log('promise2', promise2)
}, 2000)

//promise异常报错情况

const p = Promise.resolve().then(
    ()=>{ throw new Error('in suc') },
    ()=>{ throw new Error('in fail') }
).catch( reason => {console.log(reason.message)})
const promise = Promise.resolve().then(() => {
    return promise;
})
promise.catch(console.err)

