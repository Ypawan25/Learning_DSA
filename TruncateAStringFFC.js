function truncateString(str, num) {
let newStr=""
if(str.length<=num)
return str
  for(let i=0;i<num;i++){
      newStr +=str[i]
  }
  newStr = newStr+"..."
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
