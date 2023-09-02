let a = {
    val:1,
    toString(){
        return this.val++;
    }
}
console.log(a == 1 && a ==2 && a==3)
console.log(undefined == null)