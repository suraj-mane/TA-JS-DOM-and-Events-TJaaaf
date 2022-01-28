let form = document.querySelector("form");
let display = document.querySelector(".display");

let text = [];

function addMovie(event){
  event.preventDefault();
  text = event.target.elements.text.value;
}


form.addEventListener("submit", addMovie);

text.forEach(ele => {
  let input = document.createElement("input");
  let span = document.createElement("span");
  input.type = "checkbox";
  span.innerText = "suraj";
  input.append(span);
  display.append(input);
})