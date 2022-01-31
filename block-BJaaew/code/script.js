let Rootelement = document.querySelector(".display");
let body = document.querySelector('body');
let search = document.querySelector('.search');
let rootTag = document.querySelector('.tag');

let allTag = got.houses.map((house) => house.name); 

let activeHouse = "";

let allpeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function displayInfo(data = []) {
  Rootelement.innerText = "";
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

displayInfo(allpeople);

function createTagsUI(tags = []){
  rootTag.innerText = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.innerText = tag; 
    li.classList.add("btn");
    if(activeHouse === tag){
      li.classList.add("active");
    }

    li.addEventListener('click', () => {
      activeHouse = tag;
      let peopleOfTheHouse = got.houses.find((house) => house.name === tag).people || [];
      displayInfo(peopleOfTheHouse);
      createTagsUI(allTag);
    }) 
    rootTag.append(li);
  });
}

createTagsUI(allTag);

function handle(event) {
  serchText = event.target.value;
  let filterPeople  = allpeople.filter((p) => p.name.toLowerCase().includes(serchText.toLowerCase()));
  displayInfo(filterPeople);
}

search.addEventListener("input", handle);
body.addEventListener("load" , displayInfo);

