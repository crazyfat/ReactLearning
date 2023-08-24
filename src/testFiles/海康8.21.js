const delArr = (arr, repeat) =>{
    let slow = 1, fast = 1, cnt = 1;
    while(fast<arr.length){
        if(arr[fast]===arr[fast-1]) cnt++;
        else cnt = 1;
        if(cnt<=repeat){
            arr[slow] = arr[fast];
            slow++;
        }
        fast++;
    }
    return slow+1;
}
const arr = [1,2,2,2,3];
console.log(delArr(arr, 2))

const url = 'xxx?id=2&id=3&name=kkk&test';
function parse(url) {
    const obj = {};
    const queryString = url.split('?')[1];
    const params = queryString.split('&');
    console.log(params)
    for (const param of params) {
        const [key, value] = param.split('=');
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return obj;
}
console.log(parse(url))