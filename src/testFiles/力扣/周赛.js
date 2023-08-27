const num = 7;
let arr = [1,2,8]
const decimalToBinary = (num)=>{
    const result = [];
    do {
        var temp = num % 2;
        temp == 0 ? result.push(0) : result.push(1);
        num = Math.floor(num / 2);
    } while(num != 0);
    return result;
}
const binaryArr = decimalToBinary(num), binarySet = new Set();
let idx = 0;
for(let value of binaryArr){
    if(value === 1){
        binarySet.add(Math.pow(2, idx));
    }
    idx++;
}
let t = 0, res = 0;
while(t<arr.length && binarySet.size>0){
    let tmp = arr[t];
    if(binarySet.has(tmp)){
        binarySet.delete(tmp);
        t++;
    }else{
        if(tmp === 1){
            res = -1;
            break;
        }else{
            arr = arr.slice(0, t).concat(arr.slice(t+1, arr.length));
            arr.push(tmp/2);
            arr.push(tmp/2);
            res++;
        }
    }
}
console.log(res)

function A(){
    const m = new Map(), need = new Map(), r = new Map();
    const minOperations = (nums, target)=>{
        let mi = 0, n = 1;
        for(let i = 0; i<31; ++i){
            r.set(n, mi);
            mi++;
            n<<=1;
        }
        let all = 0;
        for(let value of nums) all += value;
        if(all<target) return -1;
        if(all === target) return 0;
        for(let value of nums){
            let tmp = r.get(value);
            if(m.has(tmp)) m.set(tmp, m.get(tmp)+1);
            else m.set(tmp, 0);
        }
        let now = 0;
        while(target){
            if(target&1){
                if(need.has(now)) need.set(now, need.get(now)+1);
                else need.set(now, 0);
            }
            target>>=1;
            now++;
        }
        let ans = 0;
        for(let i = 0; i<31; ++i){
            if(i>0){
                m.set(i, m.get(i)+m.get(i-1)/2);
            }
            if(need.get(i)){
                if(m.get(i)>0) m.set(i, m.get(i)-1);
                else{
                    ++ans;
                    for(let j = i+1; j<31; ++j){
                        if(m.get(j) == 0){
                            m.set(j, 1);
                            ans++;
                        }else{
                            m.set(j, m.get(j)-1);
                            break;
                        }
                    }
                }
            }
        }
        return ans;
    }

}
