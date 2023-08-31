function insetSort(arr){
    let len = arr.length;
    for(let i = 1; i<len; i++){
        let tmp = arr[i], j = i-1;
        while(j>=0 && arr[j]>tmp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = tmp;
    }
    return arr;
}
const arr = [3,5,78,213,4,3,1,32,23,4,2,7,34];
console.log(insetSort(arr))