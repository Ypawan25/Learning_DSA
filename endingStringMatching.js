function confirmEnding(str, target) {
  
  let newStr=""
  
  for(let i=str.length-target.length;i<str.length;i++){
    newStr += str[i]
  }
  // console.log(newStr)
if(newStr === target)
return true

  return false;
}

confirmEnding("Congratulation", "on");
