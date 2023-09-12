function q3(arr){
    let lowSet = new Array(26).fill(0), highSet = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(), ACode = 'A'.charCodeAt(), res = [];
    for(let c of arr){
        let curCode = c.charCodeAt();
        if((curCode>=aCode && curCode<=(aCode+26)) || (curCode>=ACode && curCode<=(ACode+26)))
            curCode >= ACode && curCode <= ACode+26 ? highSet[curCode-ACode] = highSet[curCode-ACode]+1 : lowSet[curCode-aCode] = lowSet[curCode-aCode]+1;
    }
    //console.log(lowSet, highSet)
    let s = '';
    while(1){
        let flag = true;
        for(let i = 0; i<26; i++){
            if(highSet[i]>0 && lowSet[i]>0){
                s = s + String.fromCharCode(i+ACode)+String.fromCharCode(i+aCode);
                highSet[i] = highSet[i]-1;
                lowSet[i] = lowSet[i]-1;
            }
            else{
                if(s!==''){
                    res.push(s);
                    s = '';
                    flag = false;
                }
            }
        }
        if(s !== '') {
            res.push(s);
            s = '';
            flag = false;
        }
        if(flag) break;
    }
    res.sort((a, b)=>{
        let i1 = a.charCodeAt(0), i2 = b.charCodeAt(0);
        if(i1!==i2) return i1-i2;
        else return b.length-a.length;
    })
    for(let val of res) console.log(val)
    return res;
}
q3('ASbBsSsSsa')