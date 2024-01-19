let nums = [-2,0,0,2,2];

var threeSum = function(nums) {
    let sortNums = nums.sort(function(a, b) {return a-b}); //sorting: n(logn)
    let arr = [];
    let i =0;

    while(i<sortNums.length){ //N*(1+(n-i)) = N*(N-i) = N^2+n(logn) =N^2
         if(i>0 && sortNums[i-1] == sortNums[i]){ 
            i++;
            continue;
         }
        let left = i+1;
        let right = sortNums.length-1;
        while(left<right){ //(n-i)*()
            let threeSum = sortNums[i]+sortNums[left]+sortNums[right];
            if(threeSum==0){
                arr.push([sortNums[i], sortNums[left], sortNums[right]]);
                left++;
                while(left<right && sortNums[left] == sortNums[left-1]){ //O(1)
                    left++; 
                }
            }
            else if(threeSum<0){
                left++;
            }
            else if(threeSum>0){
                right--;
            }
        }
        i++;
    }
    return arr;
};

let result = threeSum(nums);
console.log(result);