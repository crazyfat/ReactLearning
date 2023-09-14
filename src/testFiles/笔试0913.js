function q2(n){
    let s = n.toString();
    let idx = s.length-1, res = 0;
    while(idx>=0){
        let cnt = 0;
        while(idx>=0 && s[idx]=='1'){
            cnt++;
            idx--;
        }
        if(cnt>=3){
            res += 2;
        }else{
            res += cnt;
        }
        while(idx>=0 && s[idx]=='0'){
            idx--;
        }
    }
    return res;
}
console.log(q2(11110111))