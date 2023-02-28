function chunkArrayInGroups(arr, size) {
  let div = Math.ceil(arr.length/size)
  console.log(div)
  let k=0
  let final=[]
  for(let i=0;i<div;i++){
    let newarr=[]
    for(let j=0;j<size;j++){
        newarr.push(arr[k])
        k++
        if(k===arr.length) break
    }
    final.push(newarr)
  }
  console.log(final)
  return final;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
