let s1 = "ab";
let s2 = "bcdkkooo";
//TC: O(S1*S2)

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

// console.log(areObjectsEqual(s1Map, s2Map)); // Output: true

function permutationInString(s1, s2) {
    if(s2.length<s1.length){
        return false;
    }
    console.log("S1", s1, "s2", s2);
  let s1Map = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Map[s1[i]]) {
      s1Map[s1[i]]++;
    } else {
      s1Map[s1[i]] = 1;
    }
  }

  //set window size equal to length s1
  let windowMap = {};
  let l = 0;
  let r = s1.length - 1;

  //add elements of initial window to map
  for (let i = 0; i < s1.length; i++) {
    windowMap[s2[i]] = windowMap[s2[i]] + 1 || 1;
  }

  //check window map == s1map
  if (areObjectsEqual(s1Map, windowMap)) {
    //return true;
    return true;
  }
  r++;
  //iterate window over s2 except initial window
  for (; r < s2.length; r++) {
    let lChar = s2[l];
    let rChar = s2[r];
    //delete l from window
    windowMap[lChar]--;
    if (windowMap[lChar] == 0) {
      delete windowMap[lChar];
    }
    l++;
    console.log("left", l, "right", r);
    //add element at r to window
    windowMap[rChar] = windowMap[rChar] + 1 || 1;

    console.log("window map", windowMap);
    console.log("s1map", s1Map);

    if (areObjectsEqual(s1Map, windowMap)) {
      //return true;
      return true;
    }
    //else next iteration
  }
  return false;
}
console.log(permutationInString(s1, s2));