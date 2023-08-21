let arr = [3,5,78,213,4,3,1,32,23,4,2,7,34]
function chooseSort(arr){
    for(let i = 0; i<arr.length; i++){
        let tmpValue = arr[i], tmpIdx = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<tmpValue){
                tmpValue = arr[j];
                tmpIdx = j;
            }
        }
        if(tmpIdx !== i){
            [arr[tmpIdx], arr[i]] = [arr[i], arr[tmpIdx]];
        }
    }
}
chooseSort(arr);
console.log(arr)