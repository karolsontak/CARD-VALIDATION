import validator from './validator.js'

let cardNumber = document.getElementById("cardNumberId");  //Pega o valor do input 


function pushButton(e){
    e.preventDefault();
    let validCard = cardNumber.value;
    let result = validator.isValid(validCard);
    let mask = validator.maskify(validCard);
    let text = document.getElementById("text");
    if (result === true) {
        text.textContent = "CARTÃO VÁLIDO " + mask;
    }
    else {
        text.textContent = "CARTÃO INVÁLIDO " + mask;
    }
    
}

let validateButton = document.getElementById("buttonId"); //Pega o valor do botão   
validateButton.addEventListener("click", pushButton)









//    let reverseNumber = validCard.split("").reverse();  //split: converte string em array; reverse: inverte os numeros
