function translatePigLatin(str) {

  let str1=""
    if(str[0]=='a'||str[0]=='e'||str[0]=='i'||str[0]=='o'||str[0]=='u')
    {   str +="way"
        for(let i=0;i<str.length;i++){
          str1 +=str[i]
        }
        console.log(str1)
        return str1
    }
    else{
          let count=0;
          for(let i=0;i<str.length;i++){
            if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
              break;
            }
            else 
            count++
          } 
          for(let i=count;i<str.length;i++){
          str1 +=str[i]
        }
        for(let i=0;i<count;i++)
        str1 +=str[i]
        str1 +="ay"
        console.log(str1)
        return str1
    }
}

translatePigLatin("glove");
