let form = document.querySelector('form');

let dataset = {};
let UserError = "";

function conditionForm(event) {
  event.preventDefault();
   dataset.userName = event.target.elements.userName.value;

  if(dataset.userName.length < 4){
    UserError = "User Name is to short";
  }
  console.log(dataset.nextElementSibling);
}

form.addEventListener("submit", conditionForm);
