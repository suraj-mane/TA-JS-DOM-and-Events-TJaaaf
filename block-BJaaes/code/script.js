let form = document.querySelector('form');

let errorMessages = "";

function displayError(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = errorMessages[name];
  elm.parentElement.classList.add("error");
}
function displaySuccess(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = ""
  errorMessages[name] = "";
  elm.parentElement.classList.remove("error");
  elm.parentElement.classList.add("sucess");
}

function conditionForm(event) {
  event.preventDefault();
  let elements = event.target.elements;
   let userName = elements.userName.value;
   let name = elements.name.value;
   let email = elements.email.value;
   let phone = elements.phone.value;
   let password = elements.password.value;

   if(userName.length < 4){
     errorMessages.userName = "username is too short";
     displayError("userName");
   } else {
     displaySuccess("userName");
   } 

   if(!isNaN(name)){
    errorMessages.name = "You can't use number in the name field";
    displayError("name");
   } else {
    displaySuccess("name");
   }

   if(!email.includes('@')){
     errorMessages.email = "Not a valid email"
     displayError("email");
   } else if(email.length < 6){
    errorMessages.email = "Email is too short"
    displayError("email");
   } else {
     displaySuccess("email");
   }

   if(isNaN(phone)){
    errorMessages.phone = "Not a valid email"
    displayError("phone");
  } else if(phone.length < 7){
   errorMessages.phone = "Email is too short"
   displayError("phone");
  } else {
    displaySuccess("phone");
  }
}

form.addEventListener("submit", conditionForm);
