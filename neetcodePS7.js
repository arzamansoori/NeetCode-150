let str = ["neet","code","love","you"];

var encode = function(str){
    if(str.length === 0){
        return null
    }
    return str.join(":#");
}

var decode = function(str){
    if(str === null){
        return [];
    }
    return str.split(":#");
}
let encodeStr = encode(str);

console.log(decode(encodeStr));