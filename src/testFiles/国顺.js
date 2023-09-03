// 出现1次不同的数
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    function q1(arr){
        const mapO = new Map(), mapE = new Map();
        for(let i = 0, len = arr.length; i<len; i++){
            if(i%2===0){
                mapE.set(arr[i], (mapE.get(arr[i])|0)+1);
            }else{
                mapO.set(arr[i], (mapO.get(arr[i])|0)+1);
            }
        }
        if(mapO.size+mapE.size>3) return 'NO';
        if(mapO.size === 2){
            let min = 10001;
            mapO.forEach((value, key)=>{
                min = Math.min(min, key)
            })
            if(min>1) return 'NO';
        }
        if(mapE.size === 2){
            let min = 10001;
            mapE.forEach((value, key)=>{
                min = Math.min(min, key)
            })
            if(min>1) return 'NO';
        }
        return 'YES';
    }
    // let arr1 = [2,3,3,2], arr2 = [1,1,2,1,2]
    // console.log(q1(arr1)+' '+q1(arr2))
    // Write your code here
    var line = await readline();
    while(line = await readline()){
        line = await readline()
        let arr = line.split(' ');
        console.log(q1(arr));
    }
}()
function q2(a, b){
    for(let i = a.length-1; i>=1; i--){
        //[a1, a2] [b1, b2]
        let tmp = [];
        tmp.push(a[i], a[i-1], b[i], b[i-1]);
        tmp.sort((a, b)=>a-b);
        a[i] = tmp[3];
        a[i-1] = tmp[2];
        b[i] = tmp[1];
        b[i-1] = tmp[0];
    }
    for(let i = 1, len = a.length; i<len; i++){
        if(a[i]<a[i-1] || b[i]<b[i-1]) return 'NO'
    }
    return 'YES'
}
