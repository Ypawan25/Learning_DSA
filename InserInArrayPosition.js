function getIndexToIns(arr, num) {
let i;
  arr.sort(function(a,b){
    return a-b
  })
  
  if(arr.length===0) return 0

  for( i=0;i<arr.length;i++){
    if(arr[i]>=num){
       console.log(arr[i])
      return i
    }
   
  }
  return i
}

console.log(getIndexToIns([5, 3, 20, 3], 5))
