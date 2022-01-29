let input = document.querySelector('input[type="text"]');
let movieRoot = document.querySelector("ul");
let btnAll = document.querySelector(".all");
let btnActive = document.querySelector(".active");
let btncomplete = document.querySelector(".complete");

allMovies = [];

input.addEventListener('keyup', (event) => {
  if(event.keyCode === 13){
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  } 
  localStorage.setItem("todos",JSON.stringify(allMovies));
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    localStorage.setItem("todos",JSON.stringify(allMovies));
    createMovieUI();
}

function changeMovie(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  localStorage.setItem("todos",JSON.stringify(allMovies));
}


function createMovieUI(){
  movieRoot.innerText = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("check-box");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener('change', changeMovie);
    let label = document.createElement("label");
    label.for = "1";
    label.classList.add("list");
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", i);
    span.addEventListener('click', deleteMovie);

    li.append(input, label, span)
    movieRoot.append(li);
  });
}

createMovieUI();

function displayAll() {
  createMovieUI();
}

function displayActive(){
  allMovies.filter((ele) => {
    if(ele.watched == false){
      createMovieUI();
    }
  })
}

function displayComplete() {
  allMovies.filter(ele => ele);
}

btnAll.addEventListener('click', displayAll);
btnActive.addEventListener('click',displayActive);
btncomplete.addEventListener('click',displayComplete);