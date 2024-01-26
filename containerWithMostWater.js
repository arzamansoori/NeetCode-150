//TC: O(N)

let height = [1,8,6,2,5,4,8,3,7];

let left = 0;
let right = height.length -1;
let maxAreaResult = 0;
let length = height.length-1 ;

while(left<right){
    let area = Math.min(height[left], height[right])*length;
    maxAreaResult = Math.max(maxAreaResult, area);
    if(height[left]<height[right]){
        left++;
        length--;
    }
    else{
        right--;
        length--;
    }

}
console.log(maxAreaResult);





























// var maxArea = function(height) {
//     let maxAreaResult = 0;
//     for(let l=0; l<height.length; l++){
//         for(r=1; r<height.length; r++){
//             let area = (r-l)*Math.min(height[l], height[r]);
//             maxAreaResult = Math.max(maxAreaResult, area);
//         }
//     }
//     return maxAreaResult;
// };
// let area = maxArea(height);
// console.log(area);