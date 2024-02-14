let s = ") (){}";

var isValid = function (s) {
  let sSplit = s.split(""); //['(','[',')',']']

  //create a stack
  let stack = [];

  //iterate through the splitted string
  for (let i = 0; i < sSplit.length; i++) {
    //for opening brackets push in the stack
    if (sSplit[i] == "(" || sSplit[i] == "[" || sSplit[i] == "{") {
      stack.push(sSplit[i]); //stack = ['(', '['  ]
    }

    //for closing brackets pop from the stack
    else if (sSplit[i] == ")" || sSplit[i] == "]" || sSplit[i] == "}") {
      console.log("inside if", sSplit[i]);
      if (stack.length == 0) {
        return false;
      }
      let popEle = stack.pop(); //]
      //console.log(popEle)

      //check if the popped element is same as opening brackets
      if (
        (popEle == "(" && sSplit[i] != ")") ||
        (popEle == "[" && sSplit[i] != "]") ||
        (popEle == "{" && sSplit[i] != "}")
      ) {
        //if yes continue
        //if no return false
        console.log("inside if");
        return false;
      }
    }
  }
  //check if the stack is empty to make sure there are no opening brackets are remaining
  //iterated through the length return true
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

let ans = isValid(s);
console.log(ans);

// function checkSequence(sSplit) {
//   let stack = [];
//   for (let i = 0; i < sSplit.length; i++) {
//     if (sSplit[i] == "(") {
//       stack.push(sSplit[i]);
//       stack.push(")");
//     } else if (sSplit[i] == "[") {
//       stack.push(sSplit[i]);
//       stack.push("]");
//     } else if (sSplit[i] == "{") {
//       stack.push(sSplit[i]);
//       stack.push("}");
//     }
//   }
//   return stack.join("") == sSplit.join("");
// }

// function checkCloseSeq(sSplit) {
//   let openCir = 0;
//   let openSq = 0;
//   let openCurl = 0;
//   for (let i = 0; i < sSplit.length; i++) {
//     if (sSplit[i] == "(") {
//       openCir++;
//     } else if (sSplit[i] == "[") {
//       openSq++;
//     } else if (sSplit[i] == "{") {
//       openCurl++;
//     } else if (sSplit[i] == ")" && openCir > 0) {
//       openCir--;
//     } else if (sSplit[i] == "]" && openSq > 0) {
//       openSq--;
//     } else if (sSplit[i] == "}" && openCurl > 0) {
//       openCurl--;
//     }
//   }

//   if (openCir == 1 || openSq == 1 || openCurl == 1) {
//     return false;
//   }
//   else{
//     return true;
//   }
// }

// if(checkSequence(sSplit)==true || checkCloseSeq(sSplit)==true){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
