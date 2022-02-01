let cardNumber = document.getElementById("cardNumberId");  //Pega o valor do input 
    let validCard = cardNumber.value;
    let result = validCard.isValid();
    let mask = result.maskify();

    if (result === true) {
    validCard.textContent = "CARTÃO VÁLIDO";
    }   
    else {
    validCard.textContent = "CARTÃO INVÁLIDO";
    }

let validateButton = document.getElementById("buttonId"); //Pega o valor do botão   
validateButton.addEventListener("click", cardNumber)









//    let reverseNumber = validCard.split("").reverse();  //split: converte string em array; reverse: inverte os numeros
