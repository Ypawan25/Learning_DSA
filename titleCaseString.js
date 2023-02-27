function titleCase(str) {
  let newStr = ""
  let strArray = str.split(" ")

  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      if (j === 0)
        newStr += strArray[i][j].toUpperCase()
      else
        newStr += strArray[i][j].toLowerCase()
    }
    if(i<strArray.length-1)
    newStr += " "
  }
  console.log(newStr)
  return newStr;
}

titleCase("sHoRt AnD sToUt")
