let cardNumber = document.getElementById("cardNumberId")  //Pega o valor do input 
let validCard = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1-$2-$3-$4")

console.log(validCard) = "ok"


const validateButton = document.getElementById("buttonId"); //Pega o valor do botão 
validateButton.addEventListener("click", function (e){
    e.preventDefault();   
}) 
console.log(validateButton.isValid(buttonId))






//function valid (e){
//  e.preventDefault()   //(e) = event - preventDefault = cancela o evento
  

//
    



//const validCard = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1-$2-$3-$4");

//const validateButton = document.getElementById("buttonId").addEventListener("click", function (e){
// e.preventDefault();
//console.log(validateButton.isValid(buttonId))
//console.log(validate)  
//});


//validate.addEventListener("click", function (e){
//  e.preventDefault();
//const result = validator.isValid(validCard);
//console.log(result); 





// MASCARA
//function maskify(cardNumber){
//  return cardNumber.split("").map((letter,i) => i < cardNumber.lenght - 4 ? "#" : letter).join("");
// ou
// maskify(isValid) {
// return isValid.replace(/.(?=.{4})/g, "#");