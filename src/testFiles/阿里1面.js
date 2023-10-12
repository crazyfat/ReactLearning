function q1(s){
    const len = s.length;
    let dp = new Array(s.length).fill(false).map(()=>new Array(s.length).fill(false));
    for(let i = 0; i<len; i++){
        dp[i][i] = true;
    }
    let maxLen = 1, max = s[0];
    for(let i = len-1; i>=0; i--){
        for(let j = i+1; j<len; j++){
            if(s[i] === s[j]){
                if(i+1===j){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if(dp[i][j]){
                if(maxLen<j-i+1){
                    maxLen = j-i+1;
                    max = s.slice(i, j+1);
                }
            }
        }
    }
    console.log(max);
    return max;
}
q1("babbad")
let image = [[1,1,1],
    [1,1,0],
    [1,0,1]]
let sr = 1, sc = 1, newColor = 2;
var floodFill = function(image, sr, sc, newColor) {
    const dire = [[0,1], [0,-1], [1,0], [-1,0]];
    const que = [], oldColor = image[sr][sc];
    que.push([sr,sc]);
    while(que.length>0){
        let tmp = que.shift();
        image[tmp[0]][tmp[1]] = newColor;
        for(let value of dire){
            let newR = tmp[0]+value[0], newC = tmp[1]+value[1];
            if(newR>=0 && newR<image.length && newC>=0 && newC<image[0].length && image[newR][newC]===oldColor){
                que.push([newR, newC]);
            }
        }
    }
    console.log(image);
};
floodFill(image, sr, sc, newColor)
