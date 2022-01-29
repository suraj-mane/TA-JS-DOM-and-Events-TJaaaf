let input = document.querySelector('input[type="text"]');
let movieRoot = document.querySelector("ul");
let btnAll = document.querySelector(".all");
let btnActive = document.querySelector(".active");
let btncomplete = document.querySelector(".complete");

allTodos = [];

input.addEventListener('keyup', (event) => {
  if(event.keyCode === 13 && event.target.value){
    allTodos.push({
      name: event.target.value,
      isDone: false,
    });
    event.target.value = "";
    createMovieUI();
  } 
  localStorage.setItem("todos",JSON.stringify(allTodos));
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    localStorage.setItem("todos",JSON.stringify(allTodos));
    createMovieUI();
}

function changeMovie(event) {
  let id = event.target.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem("todos",JSON.stringify(allTodos));
}


function createMovieUI(data = allTodos){
  movieRoot.innerText = "";
  data.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("check-box");
    input.type = "checkbox";
    input.id = i;
    input.checked = todo.isDone;
    input.addEventListener('change', changeMovie);
    let label = document.createElement("label");
    label.for = "1";
    label.classList.add("list");
    label.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", i);
    span.addEventListener('click', deleteMovie);

    li.append(input, label, span)
    movieRoot.append(li);
  });
}




btnAll.addEventListener('click', () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  createMovieUI(allTodos);
});


btnActive.addEventListener('click', () => {
  let allactive = allTodos.filter((todo) => !todo.isDone);
  createMovieUI(allactive);
});

btncomplete.addEventListener('click',() => {
  let allcomplete = allTodos.filter((todo) => todo.isDone == true);
  createMovieUI(allcomplete);
});

createMovieUI();