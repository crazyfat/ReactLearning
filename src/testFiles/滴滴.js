let arr1 = '3 10 20';
arr1 = arr1.split(' ');
arr1 = arr1.map(item=>parseInt(item));
let n = arr1[0], a = arr1[1], b = arr1[2];
let arr2 = '7 9 6';
arr2 = arr2.split(' ');
arr2 = arr2.map(item=>parseInt(item));
console.log(n, a, b)
let high = parseInt(a*b/n), low = 1;
while(low<high){
    let mid = parseInt(low/2 + high/2), total = a;
    for(let i = 0; i<n; i++){
        let tmp = (mid*arr2[i]);
        total = total - parseInt(tmp/b);
        if(total<=0){
            break;
        }
    }
    if(total<=0){
        high = mid;
    }else{
        low = mid+1;
    }
}
console.log(low)