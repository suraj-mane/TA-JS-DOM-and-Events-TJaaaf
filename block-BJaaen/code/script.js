let userRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.computer-icons');
let result = document.querySelector('.result');

let dataset = [
  {
    name: "rock",
    beats:"scissors"
  },
  {
    name: "paper",
    beats:"rock"
  },
  {
    name: "scissors",
    beats:"paper"
  },
]

function getWinner(user, computer){
  if(user.name === computer.name){
    result.innerText = "It's a tie";
  } else if (user.beats === computer.name){
    result.innerText = "User Win";
  } else {
    result.innerText = "computer win";
  }
}

let  userSelected = {}, computerSelected = {};

function getRandomNumber(max = 3){
  return Math.floor(Math.random() * max);
}

function createuserlayout() {
  dataset.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    
    li.addEventListener('click', () => {
      userSelected = icon;

      computerSelected = dataset[getRandomNumber()];
      getWinner(userSelected, computerSelected);
    });

    li.append(i); 
    userRoot.append(li);
  });
}
createuserlayout();

function createcomputerlayout() {
  dataset.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i); 
    computerRoot.append(li);
  });
}
createcomputerlayout();