class Union{
    constructor(n) {
        this.size = n;
        this.father = [];
        this.setCnt = n;
        for(let i = 0; i<n; i++){
            this.father.push(i);
        }
    }
    find(u){
        if(u===this.father[u]) return u;
        this.father[u] = this.find(this.father[u]);
        return this.father[u];
    }
    merge(x,y){
        let fx = this.find(x);
        let fy = this.find(y);
        if(fx === fy) return;
        this.father[fx] = fy;
        this.setCnt--;
    }

}
