const doDis = (n, m, a, b) =>{
    return Math.min(Math.abs(a[0]-b[0]), Math.abs(a[0]+n-b[0]), Math.abs(a[0]-n-b[0]))+Math.min(Math.abs(a[1]-b[1]), Math.abs(a[1]+m-b[1]), Math.abs(a[1]-m-b[1]));
}
let arr1 = [1,1], arr2 = [3,3], arr3 = [1,3];
console.log(doDis(3, 3, arr1, arr2)+doDis(3, 3, arr2, arr3))