function quickSort(arr){
    if(arr.length <= 1) return arr;
    const pivot = arr[0], left = [], right = [];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [3,5,78,213,4,3,1,32,23,4,2,7,34];
console.log(quickSort(arr))
function partition(arr, left, right){
    const pivot = arr[Math.floor(left/2+right/2)];
    while(left<=right){
        while(arr[left]<pivot) left++;
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
    const idx = partition(arr, left, right);
    if(left<idx-1) qs(arr, left, idx-1);
    if(idx<right) qs(arr, idx, right);
}
qs(arr, 0, arr.length-1)
console.log(arr)