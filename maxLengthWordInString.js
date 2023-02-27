function findLongestWordLength(str) {
let max = -Infinity
let charLength=0
let strArray = str.split(" ")
let lengthArray = strArray.map((x) =>x.length )

for(let i=0;i<lengthArray.length;i++){
    if(lengthArray[i]>max){
      max=lengthArray[i]
    }

}
// console.log(max)
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
