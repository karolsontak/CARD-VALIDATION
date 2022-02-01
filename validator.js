//import {} from './index.js'

const validator = { 
    isValid: function(validCard){
    const card = Array.from(validCard)
    let cardRev = card.reverse()
    let sum = 0
    for (let i=0; i < cardRev.length; i++){
      if (i % 2 != 0){
        cardRev[i] = (Number(cardRev[i])) * 2
        if(cardRev[i] > 9){
          cardRev[i] = cardRev[i] - 9
          sum = sum + Number(cardRev[i])
        }else{
          sum = sum + (cardRev[i])
        }
      }else{
        sum = sum + Number(cardRev[i])
      }
    }
    if (sum % 10 === 0){
      return validCard = true

    }else{
      return validCard = false
    }

  }
  maskify: function(maskNumber){
    let mask = ""
    for (let i=0; i < maskNumber.length; i++){
     if (i >= ((maskNumber.length)-4)){
       mask = mask + maskNumber.charAt(i)
     }else{
       mask= mask + "#"
     }
    }
    return mask
  }
}
export default validator;