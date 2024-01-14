let nums = [100,4,200,1,3,2];

// //let numsSort = nums.sort();
// //console.log(numsSort);

// //using set
var longestConsecutive = function(nums){
    if(nums == null || nums.length == 0){
        return 0;
    }
    //100, 4, 200, 1, 3, 2
    const set = new Set(nums);
    console.log(set);
    let max=0;
    for(let num of set){
        if(set.has(num-1)){
            continue
        }
        let currNum = num; //100
        let currMax = 1;

        while(set.has(currNum +1 )){
            currNum++;
            console.log(currNum);
            currMax++;
            console.log(currMax);
        }
        max = Math.max(max, currMax);
    }
}
longestConsecutive(nums);