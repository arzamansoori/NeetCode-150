//Leetcode:167
//TimeComplexity: O(n)

let numbers = [2,7,11,15];
let target = 9;

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;

    while(left < right){
        const sum = numbers[left]+numbers[right];
        if(sum==target){
            return [left+1, right+1];
        }
        else if(sum>target){
            right--;
        }
        else if(sum<target){
            left++
        }
    }
};

const indicesNum = twoSum(numbers, target);
console.log(indicesNum);