// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
//
// 示例 1 :
// 输入: 2376
// 输出: 7326
// 解释: 交换数字2和数字7。
//
// 示例 2 :
// 输入: 9973
// 输出: 9973
function q1(num){
    let s = num.toString();
    let arr = s.split('');
    arr = arr.map(item=>parseInt(item));
    let arr2 = [...arr];
    arr2.sort((a,b)=>b-a);
    let res ='';
    for(let i = 0; i<arr2.length; i++){
        if(arr2[i]===arr[i]){
            res += arr[i];
        }else{
            break;
        }
    }
    let len1 = res.length, len2 = arr.length;
    if(len1+1>=len2){
        return parseInt(res)+(arr.slice(len1, arr.length)).join('');
    }else{
        //第一个数与最大的数字进行交换
        let tmp = arr.splice(len1, arr.length);
        let max = tmp[0], maxIdx = 0;
        for(let i = 1; i<tmp.length; i++){
            if(tmp[i]>=max){
                max = tmp[i];
                maxIdx = i;
            }
        }
        [tmp[0], tmp[maxIdx]] = [tmp[maxIdx], tmp[0]];
        res += tmp.join('');
        return res;
    }
}
// 9973
console.log(q1(9937177))
