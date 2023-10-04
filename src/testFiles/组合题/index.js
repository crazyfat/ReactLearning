const arr = [1,2,1,3];
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
// 排列题，重复数组有多少中不同排列子集
const f3 = ()=>{
    res.push([...path]);
    let idx = 0;
    while(idx<arr.length){
        if(set.has(idx)){
            idx++;
            continue;
        }
        path.push(arr[idx]);
        set.add(idx);
        f3();
        path.pop();
        set.delete(idx);
        idx++;
        while(idx<arr.length && arr[idx]===arr[idx-1]) idx++;
    }
}

// 组合题，不重复数组有多少k组合
const k = 2;
const f4 = (idx)=>{
    if(path.length === k){
        res.push([...path]);
        return;
    }
    let i = idx;
    while(i<arr.length){
        path.push(arr[i]);
        i++;
        f4(i);
        path.pop();
    }
}

// 组合题，重复数组有多少k组合
const f5 = (idx) =>{
    if(path.length === k){
        res.push([...path]);
        return;
    }
    let i = idx;
    while(i<arr.length){
        path.push(arr[i]);
        i++;
        while(i<arr.length && arr[i]===arr[i-1]) i++;
        f5(i);
        path.pop();
    }
}
arr.sort();
f5(0);
console.log(res)