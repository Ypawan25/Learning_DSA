function rot13(str) {
  let str1 = "", ch, chr, char;
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 65 && str[i].charCodeAt() > 32) {
      str1 += str[i]
    }
    else if (str[i] !== " ") {
      let ch = str[i].charCodeAt()
      let chr = ch + 13
      if (chr > 90) {
        char = chr - 90 + 65 - 1
        str1 += String.fromCharCode(char)
      }
      else {
        str1 += String.fromCharCode(chr)
      }
    }
    else {
      str1 += " "
    }
  }
  return str1;
}


let result = rot13("SERR CVMMN!");

console.log(result)
