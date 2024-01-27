let prices = [7,1,5,3,6,4]
let maxArray = [];
let maxProfitArr = [];
let max = 0;
let max2 = 0;

for(let i=prices.length-1; i>=0; i--){
    max = Math.max(max, prices[i]);
    maxArray.push(max);
}
maxArray.reverse();

for(let j=1; j<maxArray.length; j++){
    let maxProfit = maxArray[j]-prices[j-1];
    max2 = Math.max(max2, maxProfit);
    maxProfitArr.push(max2);
}
console.log(Math.max(...maxProfitArr));