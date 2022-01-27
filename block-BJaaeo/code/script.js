let display = document.querySelector('.display-screen');
let numbtn = document.querySelectorAll('li');

let initialvalue = 0;

display.innerText = initialvalue;


function handl(event){
  if(event.target.classList.contains('equal')){
    display.innerText = eval(display.innerText);
    return;
  } 
  if(event.target.classList.contains('clear')){
    display.innerText = initialvalue;
    return;
  }  
  if(display.innerText == initialvalue){
    display.innerText = event.target.innerText;
  } else {
    display.innerText += event.target.innerText;
  }
}


numbtn.forEach((element) => {
  element.addEventListener('click', handl);
  });