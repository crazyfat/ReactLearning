// 空间复杂度on的快速排序
function quickSort(arr){
    if(arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [], right = [];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(arr));

// 空间复杂度o1的快速排序
const swap = (arr, i, j) =>{
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, left, right){
    let pivot = arr[Math.floor((left+right)/2)];
    while(left<=right){
        while(arr[left]<pivot) left++;
        while(arr[right]>pivot) right--;
        if(left<=right){
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}
function qs(arr, left, right){
    const index = partition(arr, left, right);
    if(left<index-1) qs(arr, left, index-1);
    // 这里为什么不+1 因为patition函数返回的left不完全是pivot的位置，可能是pivot+1，所以需要多排序1个元素
    if(index<right) qs(arr, index, right);
}
let arr2 = [3,5,78,213,4,3,1,32,23,4,2,7,34]
qs(arr2, 0, arr2.length-1)
console.log(arr2)