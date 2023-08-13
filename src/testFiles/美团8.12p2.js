const minDiff = (n)=>{
    let res = [], idx = 1;
    while(res.length<n){
        res.push(idx);
        if(res.length<n)
            res.push(n+1-idx);
        idx++;
    }
    return res;
}
let arr = minDiff(2);
const culDiff = (res) =>{
    let diffArr = [];
    for(let i = 1; i<res.length; i++){
        diffArr.push(res[i]+res[i-1]);
    }
    return Math.max(...diffArr)-Math.min(...diffArr)
}
console.log(...arr)
console.log(culDiff(arr))