import validator from './validator.js'

let cardNumber = document.getElementById("cardNumberId");  //Pega o valor do input 


function pushButton(){
    let validCard = cardNumber.value;
    let result = validator.isValid(validCard);
    let mask = validator.maskify(validCard);
    let resultValue = document.getElementById("resultValue");
    if (validCard == "" ){
        alert ("Digite o número")
        return
    }
    
    if (result) {
        resultValue.textContent = mask + " CARTÃO VÁLIDO";
    }
    else {
        resultValue.textContent = mask + " CARTÃO INVÁLIDO";
    }
    document.getElementById("cardNumberId").value = ""

}

function btn(){
    let displayOn = document.getElementById("resultValue").style.display;
    if (displayOn == "block") {
        document.getElementById("resultValue").style.display = 'none'
    }
    else {
        document.getElementById("resultValue").style.display = 'block'
    }

}

let validateButton = document.getElementById("buttonId"); //Pega o valor do botão   
validateButton.addEventListener("click", pushButton)
validateButton.addEventListener("click", btn)