function find(s){
    let len = s.length, a = [], b = [], c = [];
    for(let i = 0; i<len; i++){
        if(s[i]==='a') a.push(i);
        else if(s[i]==='b') b.push(i);
        else c.push(i);
    }
    let res = 0;
    while(1){
        let flag = true;
        if(a.length>0 && b.length>0 && c.length>0){
            if(a[0]<b[0] && b[0]<c[0]){
                a.shift();
                b.shift();
                c.shift();
                flag = false;
                continue;
            }
            if(a[0]<b[0]){
                a.shift();
                b.shift();
                res++;
                flag = false;
                continue;
            }
            if(a[0]<c[0]){
                a.shift();
                c.shift();
                res++;
                flag = false;
                continue;
            }
            if(b[0]<c[0]){
                b.shift();
                c.shift();
                res++;
                flag = false;
                continue;
            }
        }else if(a.length>0 && b.length>0 && c.length==0){
            if(a[0]<b[0]){
                a.shift();
                b.shift();
                res++;
                flag = false;
            }
        }else if(a.length>0 && b.length==0 && c.length>0){
            if(a[0]<c[0]){
                a.shift();
                c.shift();
                res++;
                flag = false;
            }
        }else if(a.length==0 && b.length>0 && c.length>0){
            if(b[0]<c[0]){
                b.shift();
                c.shift();
                res++;
                flag = false;
            }
        }
        //console.log(a,b,c)
        if(flag) break;
    }
    return res+2*(a.length+b.length+c.length)
}
let s = 'accba'
//console.log(find(s))
function q2(arr){
    let len = arr.length, idx = len-1, max = -1, cur = arr[idx];
    while(idx>0){
        if(cur>=arr[idx-1]){
            cur += arr[idx-1];
        }else{
            max = Math.max(cur, arr[idx-1]);
            cur = arr[idx-1];
        }
        idx--;
    }
    return Math.max(cur, max);
}
const arr = [2,3,7,9,3]
console.log(q2(arr))
