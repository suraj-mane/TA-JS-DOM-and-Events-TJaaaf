let form = document.querySelector('form');
let info = document.querySelector('.info'); 

let user = {};

function userInfo(event){
  event.preventDefault();
  user.name = form.elements.text.value;
  user.email = form.elements.email.value;
  user.love = form.elements.gender.value;
  user.color = form.elements.color.value;
  user.range = form.elements.range.value;
  user.book = form.elements.book.value;
  user.terms = form.elements.terms.value;

  displayInfo(user);
}

form.addEventListener("submit", userInfo);

function displayInfo(data = {}) {
  let h1 = document.createElement("h1");
  h1.innerText = `Hello: ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let love = document.createElement("p");
  love.innerText = `You Love: ${data.love}`;
  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;
  let rate = document.createElement("p");
  rate.innerText = `Range: ${data.range}`;
  let book = document.createElement("p");
  book.innerText = `Ratting: ${data.book}`;
  let terms = document.createElement("p");
  terms.innerText = `>: ${data.terms === "on" ? "You agree to terms and conditions" : "You have not accepted the terms and condition"}`;
  
  console.log();
  info.append(h1, email, love, color, rate, book, terms);
}


