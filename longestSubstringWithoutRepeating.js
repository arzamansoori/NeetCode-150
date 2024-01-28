
/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 */

let s = "pwwkew";

//TC:O(N) 
let set = new Set();
let left =0;
let maxLength=0;

for(let right=0; right<s.length; right++){
    while(set.has(s[right])){ //0(1)
        set.delete(s[left])
        left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, set.size)
}

//Second Approach: withput using set

// let left = 0;
// let right = 0;
// let maxLength = 0;

// function checkDuplicates(s, left, right){
//     let sSubstring = s.substring(left, right);
//     console.log(sSubstring);
//     let elLast = sSubstring[sSubstring.length-1];
//     for(let i=0; i<=(sSubstring.length-2); i++){
//         if(sSubstring[i]==elLast){
//             return true;
//         }
//     }
//     return false;
// }

// for(let i=0; i<s.length; i++){ //i=2,3,4
//     right++; //right=2,3,4,5
//     if(checkDuplicates(s, left, right)){
//         left++//left=1,2
//         while(checkDuplicates(s, left, right)==true){
//             left++
//         }
//     }
//     maxLength = Math.max(maxLength, ((right-left)));
// }
// console.log(maxLength)

