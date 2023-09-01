function find(arr){
    const map = new Map();
    let idx = 0, res = 1
    map.set(arr[0], 0);
    for(let i = 1; i<arr.length; i++){
        if(!map.has(arr[i])){
            res = Math.max(i-idx+1, res);
        }else{
            idx = map.get(arr[i])+1;
            map.delete(arr[i]);
        }
        map.set(arr[i], i);
    }
    return res;
}
let s = "abcabcbb";
console.log(find(s))