const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
void async function () {
    function q4(s, k){
        const MOD = 1000000007;
        const func = function(n, k) {
            if (k === 0 || k === n) {
                return 1; // C(n, 0) = C(n, n) = 1
            }
            const dp = new Array(n + 1).fill(0);
            dp[0] = 1;
            for (let i = 1; i <= n; i++) {
                for (let j = Math.min(i, k); j > 0; j--) {
                    dp[j] = (dp[j] + dp[j - 1]);
                    if(dp[j]>MOD){
                        dp[j] = dp[j]%MOD;
                    }

                }
            }

            return dp[k];
        }
        const map25 = ['00','25','50','75'];
        const o1 = s.slice(s.length-2, s.length);
        const o2 = s.slice(0, s.length-2);
        let sum = Array.from(o2).reduce((pre, cur)=>pre+parseInt(cur),0);
        let out = 0;
        for(let value of map25){
            let res = 0;
            if(o1[0]!==value[0]) res++;
            if(o1[1]!==value[1]) res++;
            if(res>k) continue;
            let remain = k-res;
            if(remain>o2.length) continue;
            if(remain === 0){
                if((sum+parseInt(o1[0])+parseInt(o1[1]))%3 === 0){
                    out++;
                }
                continue;
            }else{
                //console.log(func(o2.length, remain))
                out += 3*func(o2.length, remain);
                out = out % MOD;
            }
        }
        //console.log('1:',out)
        out = out % MOD;
        return out;
    }
    var a = (await readline());
    var b = parseInt(await readline());
    //console.log(q4('18651313135465153515',8));
    console.log(q4(a,b))
}()
