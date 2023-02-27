function myReplace(str, before, after) {
  after = after.toLowerCase()
  let arr = str.split(" ")
  for(let i=0;i<arr.length;i++){
    if(arr[i]==before){
         if(before[0].charCodeAt()>64 && before[0].charCodeAt()<91){
          let naf= after[0].toUpperCase()
           for(let j=1;j<after.length;j++)
                naf +=after[j]
                arr[i]=naf
         }
         else{
                arr[i]=after
         }
         
    }
            
  }
  let newStr=""
  for(let i=0;i<arr.length;i++){
        if(i!=arr.length-1)
           newStr += arr[i]+" "
        else
          newStr += arr[i]
  }
  console.log(newStr)
  return newStr;
}

myReplace("I think we should look up there", "up", "Down")
