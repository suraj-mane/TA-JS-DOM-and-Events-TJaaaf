let shrot = document.querySelector(".cut");
let dis = document.querySelector(".dis");
let btn = document.querySelector("button");

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function handle(){
  let randomIndex = generateRandomNumber(data.length);
  let shortcut = data[randomIndex];
  shrot.innerText = shortcut.shortcut;
  dis.innerText = shortcut.description;
}

btn.addEventListener('click', handle);

