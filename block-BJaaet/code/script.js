let input = document.querySelector('input[type="text"]');
let movieRoot = document.querySelector("ul");

allMovies = [
  {
    name:"3",
    watched: true,
  },
  {
    name:"fan",
    watched: true,
  },
]

input.addEventListener('keyup', (event) => {
  if(event.keyCode === 13){
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  } 
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

function changeMovie(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
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