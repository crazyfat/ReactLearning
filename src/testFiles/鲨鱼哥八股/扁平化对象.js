// 就是回溯，把路径当作key
const res = {}, path = [];
const dfs = (obj) =>{
    if(typeof obj !== 'object'){
        res[path.join('.')] = obj;
    }
    if(Array.isArray(obj)){
        for(let i = 0; i<obj.length; i++){
            path[path.length-1] = path[path.length-1]+`[${i}]`
            dfs(obj[i]);
            const last = path[path.length-1];
            let idx = last.lastIndexOf('[');
            path[path.length-1] = last.slice(0, idx);
        }
    }else{
        Object.keys(obj).forEach((key)=>{
            path.push(key)
            dfs(obj[key]);
            path.pop();
        })
    }
}
const obj = {
    a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
    b: [1, 3, {a: 2, b: 3}],
    c: 3
}
dfs(obj)
console.log(res)