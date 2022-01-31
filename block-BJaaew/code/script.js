let Rootelement = document.querySelector(".display");
let body = document.querySelector('body');
let search = document.querySelector('.search');
let stark = document.querySelector('.btn-stark');
let lannister = document.querySelector('.btn-lannister');
let barathon = document.querySelector('.btn-barathon');
let targaryen = document.querySelector('.btn-targaryen');
let greyjoy = document.querySelector('.btn-greyjoy');
let tyrell = document.querySelector('.btn-tyrell');
let tully = document.querySelector('.btn-tully');
let redwyne = document.querySelector('.btn-redwyne');
let frey = document.querySelector('.btn-frey');
let arryn = document.querySelector('.btn-arryn');
let dothraki = document.querySelector('.btn-dothraki');


let activeBtn = "";

let allpeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function displayInfo(data = allpeople) {
  data.forEach((info) => {
    let li = document.createElement("li");
    li.classList.add("box");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    p.classList.add("info");
    img.classList.add("img-people");
    h3.classList.add("name-ele");
    h3.innerText = info.name;
    img.src = info.image;
    p.innerText = info.description;

    li.append(img);
    li.append(h3);
    li.append(p);
    Rootelement.append(li);
  });
}

displayInfo();


search.addEventListener("keyup" , (event) => {
  let filterName = allpeople.filter((data) =>
    data.name.includes(event.target.value)
  );
  displayInfo(filterName);
});

stark.addEventListener('click', () => {
  let starksName = allpeople.filter((data) => data.name.includes("Stark"));
  console.log(starksName);
  activeBtn = "stark";
  updateActive();
});

lannister.addEventListener('click', () => {
  let lannistersName = allpeople.filter((data) => data.name.includes("Lannister"));
  console.log(lannistersName);
  activeBtn = "lannister";
  updateActive();
});

barathon.addEventListener('click', () => {
  let barathon = allpeople.filter((data) => data.name.includes("Baratheon"));
  console.log(barathon);
  activeBtn = "barathon";
  updateActive();
});

targaryen.addEventListener('click', () => {
  let targaryen = allpeople.filter((data) => data.name.includes("Targaryen"));
  console.log(targaryen);
  activeBtn = "targaryen";
  updateActive();
});

greyjoy.addEventListener('click', () => {
  let greyjoy = allpeople.filter((data) => data.name.includes("Greyjoy"));
  console.log(greyjoy);
  activeBtn = "greyjoy";
  updateActive();
});

tyrell.addEventListener('click', () => {
  let tyrell = allpeople.filter((data) => data.name.includes("Tyrell"));
  console.log(tyrell);
  activeBtn = "tyrell";
  updateActive();
});

tully.addEventListener('click', () => {
  let tully = allpeople.filter((data) => data.name.includes("Tully"));
  console.log(tully);
  activeBtn = "tully";
  updateActive();
});

redwyne.addEventListener('click', () => {
  let redwyne = allpeople.filter((data) => data.name.includes("Redwyne"));
  console.log(redwyne);
  activeBtn = "redwyne";
  updateActive();
});

frey.addEventListener('click', () => {
  let frey = allpeople.filter((data) => data.name.includes("Frey"));
  console.log(frey);
  activeBtn = "frey";
  updateActive();
});

arryn.addEventListener('click', () => {
  let arryn = allpeople.filter((data) => data.name.includes("Arryn"));
  console.log(arryn);
  activeBtn = "arryn";
  updateActive();
});

dothraki.addEventListener('click', () => {
  let dothraki = allpeople.filter((data) => data.name.includes("Drogo"));
  console.log(dothraki);
  activeBtn = "dothraki";
  updateActive();
});

function updateActive(btn = activeBtn) {
  stark.classList.remove("active");
  lannister.classList.remove("active");
  barathon.classList.remove("active");
  targaryen.classList.remove("active");
  greyjoy.classList.remove("active");
  tyrell.classList.remove("active");
  tully.classList.remove("active");
  redwyne.classList.remove("active");
  frey.classList.remove("active");
  arryn.classList.remove("active");
  dothraki.classList.remove("active");
  if(btn === "stark"){
    stark.classList.add("active");
  } else if( btn === "lannister"){
    lannister.classList.add("active");
  } else if( btn === "barathon"){
    barathon.classList.add("active");
  } else if( btn === "targaryen"){
    targaryen.classList.add("active");
  } else if( btn === "greyjoy"){
    greyjoy.classList.add("active");
  } else if( btn === "tyrell"){
    tyrell.classList.add("active");
  } else if( btn ==="tully"){
    tully.classList.add("active");
  } else if( btn === "redwyne"){
    redwyne.classList.add("active");
  } else if( btn === "frey"){
    frey.classList.add("active");
  } else if( btn === "arryn"){
    arryn.classList.add("active");
  } else if( btn === "dothraki"){
    dothraki.classList.add("active");
  }
}

body.addEventListener("load" , displayInfo);

