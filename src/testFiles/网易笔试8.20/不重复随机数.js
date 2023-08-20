const arr = [];
let cnt = 5;
for(let i = 2; i<=32; i++) arr.push(i);
function getRandom(num){
    if(num === cnt) return;
    const idx = Math.random()*(arr.length-num) | 0;
    //console.log('**', idx)
    let tmp = arr[idx];
    arr[idx] = arr[arr.length-num-1];
    arr[arr.length-num-1] = tmp;
    getRandom(++num);
}
getRandom(0);
console.log(...arr.slice(arr.length-cnt-1, arr.length))