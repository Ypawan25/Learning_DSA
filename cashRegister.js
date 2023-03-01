function calSum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
          sum += arr[i][1]
  }
  return sum*100
}

function checkCashRegister(price, cash, cid) {
  let change = {
               status: "not", 
               change: [],
               
               }
  let sum =calSum(cid)
  let returnAmount=cash*100-price*100       
  if(sum<returnAmount){
    change.status= "INSUFFICIENT_FUNDS"
  }
  else if(sum===returnAmount){
    change.status = "CLOSED"
    change.change = cid
  }
  else{
       cid = cid.reverse()
       let denomination={"ONE HUNDRED": 10000,"TWENTY": 2000,"TEN": 1000,"FIVE": 500,"ONE": 100,"QUARTER": 25,"DIME": 10,"NICKEL": 5,"PENNY": 1,}
       let ans =[]
      for(let el of cid){
           el[1] = el[1] *100
           let store=[el[0],0]
           console.log(store)
               while(returnAmount >=denomination[el[0]] && el[1]>0){
                         returnAmount -= denomination[el[0]]
                         el[1] -=denomination[el[0]]
                         store[1] += denomination[el[0]]/100
                         
               }
               
               if(store[1]>0)
                    ans.push(store)
               
      }
      console.log(ans)
      if(returnAmount>0)
          change.status= "INSUFFICIENT_FUNDS"
      else if(returnAmount==0){
            change.status= "OPEN"
            change.change = ans
      }    
  }

   console.log(change)

  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
