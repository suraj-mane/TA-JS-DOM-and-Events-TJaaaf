let BoxOne = document.querySelector('.first');
let BoxSecound = document.querySelector('.second');

function generaterandomcolor(){
  let hexCharactors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let color = "#";

  for(let i=0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color = color + hexCharactors[randomNumber];
  }

  return color;
}

function handleclick() {
  let randomColor = generaterandomcolor();
  BoxOne.style.background = randomColor;
}

function handleMouseover() {
  let randomColor = generaterandomcolor();
  BoxSecound.style.background = randomColor;
}

BoxOne.addEventListener('click', handleclick);

BoxSecound.addEventListener('mouseover',handleMouseover);