import validator from './validator.js'

let cardNumber = document.getElementById("cardNumberId");  


function clickButton(){
    let validCard = cardNumber.value;
    let result = validator.isValid(validCard);
    let mask = validator.maskify(validCard);
    let resultValue = document.getElementById("resultValueId");
  
    if (validCard == "" ){
        alert ("Digite o número")
        return
    }
    
    if (result) {
        resultValue.textContent = mask + " - CARTÃO VÁLIDO";
    }
    else {
        resultValue.textContent = mask + " - CARTÃO INVÁLIDO";
    }
    document.getElementById("cardNumberId").value = ""

}


let validateButton = document.getElementById("buttonId");  
validateButton.addEventListener("click", clickButton)
