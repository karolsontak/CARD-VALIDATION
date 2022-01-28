//import validator from "./validator.js";
const validator = {
    valid() {
      // e.preventDefault();
  
      let cardNumber = document.getElementsByName("cardNumber");
  
      let cardNumberValue = cardNumber.value;
      console.log(cardNumberValue);
      console.log(typeof cardNumberValue);
  
    }
  } 

console.log('hello carol');

const validate = document.getElementById("button");

validate.addEventListener("click", validator.valid);