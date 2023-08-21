function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        let flag = false;
        for(let j = 1; j<arr.length-i; j++){
            if(arr[j]<arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                flag = true;
            }
        }
        if(!flag) break;
    }
}
let arr = [3,5,78,213,4,3,1,32,23,4,2,7,34]
bubbleSort(arr);
console.log(arr)