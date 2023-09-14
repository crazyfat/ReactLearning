function partition(arr, left, right){
    let pivot = arr[parseInt(left/2+right/2)]
    while(left<=right){
        while (arr[left]<pivot) left++;
        while(arr[right]>pivot) right--;
        if(left<=right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}
function qs(arr, left, right){
    let index = partition(arr, left, right);
    if(left<index-1) qs(arr, left, index-1);
    if(index<right) qs(arr, index, right);
}
let arr2 = [3,5,78,213,4,3,1,32,23,4,2,7,34]
qs(arr2, 0, arr2.length-1)
console.log(arr2)
