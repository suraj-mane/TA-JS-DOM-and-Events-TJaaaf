let parentBox = document.querySelector('.boxes');

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}


function changeColor() {
  let hexColor = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

  let color = "#";

  for(let i=0; i<6; i++){
    let randomcolor = getRandomNumber;
    color = color + hexColor[randomcolor];
  }
  return color;
}


for(let i=0; i<500; i++){
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomno = getRandomNumber(500);
  h3.innerText = randomno;

  div.append(h3);
  parentBox.append(div);
}
let allboxes = document.querySelectorAll('.box');

function handlemouse() {
  allboxes.forEach((box) =>{
    box.style.backgroundcolor = changeColor();
  });
}

parentBox.addEventListener("mousemove", handlemouse);