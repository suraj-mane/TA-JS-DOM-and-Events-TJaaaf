let form = document.querySelector('form');

let user = {};

function userInfo(event){
  event.preventDefault();
  user.name = form.elements.text.value;
  user.email = form.elements.email.value;
  user.love = form.elements.gender.value;
  user.color = form.elements.color.value;
  user.range = form.elements.range.value;
  user.terms = form.elements.terms.value;
}

form.addEventListener("submit", userInfo);

let userName = document.querySelector('.name');
let userEmail = document.querySelector('.email');
let userLove = document.querySelector('.love');
let userColor = document.querySelector('.color');
let userRate = document.querySelector('.rate');
let userTerms = document.querySelector('.terms');


