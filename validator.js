let validator = {
  
  isValid: function (validCard) {
  
    //Array: objeto global usado na construção de 'arrays'
    let card = Array.from(validCard)   
    let reverseNumber = card.reverse()
    
    //sum = 0: Inicia uma variável para armazenar o resultado e usar o loop for para visitar cada elemento e adicioná-los à soma do array.
    let sum = 0        
    for (let i = 0; i < reverseNumber.length; i++) {
      if (i % 2 != 0) {
        reverseNumber[i] = (Number(reverseNumber[i])) * 2   //Number: objeto encapsulado que permite trabalhar com valores numéricos  
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
    
    let mask = ""
        for (let i = 0; i < maskNumber.length; i++) {
      if (i >= ((maskNumber.length) - 4)) {
        mask = mask + maskNumber.charAt(i)
      } else {
        mask = mask + "#"
      }
    }
    return mask
  }
}
export default validator;