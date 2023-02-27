function frankenSplice(arr1, arr2, n) {
  let ans = []
  for(let j=0;j<arr2.length;j++){
    ans.push(arr2[j])
  }
  for(let i=0;i<arr1.length;i++)
  ans.splice(n+i,0,arr1[i])
  console.log(ans)
  
  return ans;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
