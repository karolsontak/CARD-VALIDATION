let validator = {
  
  isValid: function (cardNumber) {
  
    let card = Array.from(cardNumber)   
    let reverseNumber = card.reverse()
    
    let sum = 0        
    for (let i = 0; i < reverseNumber.length; i++) {
      if (i % 2 != 0) {
        reverseNumber[i] = (Number(reverseNumber[i])) * 2   
        if (reverseNumber[i] > 9) {
          reverseNumber[i] = reverseNumber[i] - 9
          sum = sum + Number(reverseNumber[i])
        } 
        else {
          sum = sum + (reverseNumber[i])
        }
      } 
      else {
        sum = sum + Number(reverseNumber[i])
      }
    }
    if (sum % 10 === 0) {
      return true

    } else {
      return false
    }
  },

  maskify: function (maskNumber) {
    
    const lastFourNumber = 4
    let mask = ""
        for (let i = 0; i < maskNumber.length; i++) {
      if (i >= ((maskNumber.length) - lastFourNumber)) {
        mask = mask + maskNumber.charAt(i)
      } else {
        mask = mask + "#"
      }
    }
    return mask
  }
}
export default validator;