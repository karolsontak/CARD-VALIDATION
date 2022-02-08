import validator from './validator.js'

let getNumber = document.getElementById("getNumberId");  

function cardValidation(){
    let cardNumber = getNumber.value;
    let validatorResult = validator.isValid(cardNumber);
    let mask = validator.maskify(cardNumber);
    let resultField = document.getElementById("resultFieldId");
    
    if (cardNumber == "" ){  
        return resultField.textContent = "Digite um número" 
    } 
    if (validatorResult) {
        resultField.textContent = mask + " - CARTÃO VÁLIDO";
    }
    else {
        resultField.textContent = mask + " - CARTÃO INVÁLIDO";
    }
    document.getElementById("getNumberId").value = ""
}

let runButton = document.getElementById("buttonId");  
runButton.addEventListener("click", cardValidation)
