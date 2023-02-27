function convertToRoman(num) {
  let i, str = "";

  if (num / 1000 >= 1) {

    for (i = 0; i < Math.floor(num / 1000); i++) {
      str += "M"
    }
    num = num % 1000
    console.log(num)
  }
  if (num / 900 >= 1) {
    for (i = 0; i < Math.floor(num / 900); i++) {
      str += "CM"
    }
    num = num % 900
    console.log(num)
  }
  if (num / 500 >= 1) {
    for (i = 0; i < Math.floor(num / 500); i++) {
      str += "D"
    }
    num = num % 500
    console.log(num)
  }
  if (num / 400 >= 1) {
    for (i = 0; i < Math.floor(num / 400); i++) {
      str += "CD"
    }
    num = num % 400
    console.log(num)
  }
  if (num / 100 >= 1) {
    for (i = 0; i < Math.floor(num / 100); i++) {
      str += "C"
    }
    num = num % 100
    console.log(num)
  }
  if (num / 90 >= 1) {
    for (i = 0; i < Math.floor(num / 90); i++) {
      str += "XC"
    }
    num = num % 90
    console.log(num)
  }
  if (num / 50 >= 1) {
    for (i = 0; i < Math.floor(num / 50); i++) {
      str += "L"
    }
    num = num % 50
    console.log(num)
  }
  if (num / 40 >= 1) {
    for (i = 0; i < Math.floor(num / 40); i++) {
      str += "XL"
    }
    num = num % 40
    console.log(num)
  }
  if (num / 10 >= 1) {
    for (i = 0; i < Math.floor(num / 10); i++) {
      str += "X"
    }
    num = num % 10
    console.log(num)
  }
  if (num / 9 >= 1) {
    for (i = 0; i < Math.floor(num / 9); i++) {
      str += "IX"
    }
    num = num % 9
    console.log(num)
  }
  if (num / 5 >= 1) {
    for (i = 0; i < Math.floor(num / 5); i++) {
      str += "V"
    }
    num = num % 5
    console.log(num)
  }
  if (num / 4 >= 1) {
    for (i = 0; i < Math.floor(num / 4); i++) {
      str += "IV"
    }
    num = num % 4
    console.log(num)
  }
  if (num / 1 >= 1) {
    for (i = 0; i < Math.floor(num / 1); i++) {
      str += "I"
    }
    num = num % 1
    console.log(num)
  }
  return str;
}

let result = convertToRoman(2014);
console.log(result)
