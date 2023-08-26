const primes = new Array(100).fill(0);
const vis = new Array(100).fill(false);
const set = [];
function get_p(n){
    let cnt = 0;
    for(let i = 2; i<=n; i++){
        if(!vis[i]) primes[cnt++]=i;
        for(let j = 0; primes[j]<=n/i; j++){
            vis[primes[j]*i]=true;
            set.push(primes[j]*i);
            if(i%primes[j]==0) break;
        }
    }
}
get_p(4);
console.log(primes)
console.log(set)
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let n = await readline();
    let str = await readline();
    let arr = str.split(' ');
    arr.forEach((item, idx)=>{
        arr[idx] = parseInt(arr[idx]);
    })
    //arr.sort((a,b)=>a-b);
    let max = arr[arr.length-1]/2|0;
    const primes = new Array(max).fill(0);
    const vis = new Array(max).fill(false);
    const another_set = [];
    const get_p = (n)=>{
        let cnt = 0;
        for(let i = 2; i<=n; i++){
            if(!vis[i]) primes[cnt++] = i;
            for(let j = 0; primes[j]<=n/i; j++){
                vis[primes[j]*i] = true;
                another_set.push(primes[j]*i);
                if(i%primes[j]==0) break;
            }
        }
    }
    get_p(max);
    let res = 0;
    for(let value of arr){
        for(let div of another_set){
            if(div>=value) break;
            if(value % div === 0){
                res++;
                break;
            }
        }
    }
    console.log(res);
}()