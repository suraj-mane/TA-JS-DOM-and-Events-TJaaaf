let colorNum = document.querySelector('.inline');
 
function numberChange() {
  let num = [0,1,2,3,4,5,6,7,8,9];

  let numForBox = 0;

  for(let i=0; i<3; i++){
    let randomNumber = Math.floor(Math.random() * 16);
    numForBox = numForBox + num[randomNumber];
  }

  return numForBox;
}

function changeColor() {
  let hexColor = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

  let color = "#";

  for(let i=0; i<6; i++){
    let randomcolor = Math.floor(Math.random() * 16);
    color = color + hexColor[randomcolor];
  }
  return color;
}


function intext(){
  let ra = numberChange();
  let colors = changeColor();
  colorNum.innerHTML = ra;
  colorNum.style.background = colors;
}

colorNum.addEventListener('click', intext);