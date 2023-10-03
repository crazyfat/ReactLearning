const arr = [1,2,3,4,1];
let res = [], path = [], set = new Set();
// 其实是排列题，不重复数组有多少种排列
const f1 = ()=>{
    if(path.length === arr.length){
        res.push([...path]);
        return;
    }
    let idx = 0;
    while(idx<arr.length){
        if(set.has(arr[idx])){
            idx++;
            continue;
        }
        path.push(arr[idx]);
        set.add(arr[idx]);
        f1();
        let tmp = path.pop();
        set.delete(tmp);
        idx++;
    }
}
// f();
// 排列题，重复数组有多少种不同排列
const f2 = ()=>{
    if(path.length === arr.length){
        res.push([...path]);
        return;
    }
    let idx = 0;
    while(idx<arr.length){
        if(set.has(idx)){
            idx++;
            continue;
        }
        path.push(arr[idx]);
        set.add(idx);
        f2();
        let tmp = path.pop();
        set.delete(idx);
        idx++;
        while(idx<arr.length && arr[idx]===arr[idx-1]) idx++;
    }
}
arr.sort();
f2();
console.log(res)