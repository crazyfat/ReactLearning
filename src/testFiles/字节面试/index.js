new Promise((resolve, reject)=>{
    console.log('a');
    resolve()
}).then(
    ()=>{
       console.log('b');
       new Promise((resolve, reject)=>{
           console.log('c');
           resolve()
       }).then(
           ()=>{
               console.log('d')
           }
       ).then(
           ()=>{
               console.log('e')
           }
       ).then(()=>{console.log('g')})
    }
).then(
    ()=>{
        console.log('f')
    }
).then(()=>{console.log('h')})
//https://juejin.cn/post/6844903987183894535#heading-6