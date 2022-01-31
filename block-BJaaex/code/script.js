data = [
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
    </svg>,
    name: "at-Symbol",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>,
    name: "bell",
  },
]

let Rootgame = document.querySelector('.game');
let btn = document.querySelector(".display");
function symbols() {
  data.forEach(element => {
    let li = document.createElement("li");
    let img = document.createElement("image");
    img.src = element.img;
    li.innerText = element.img;

    li.append(img);
    Rootgame.append(li);
  });
}

symbols();

btn.addEventListener("click", symbols);
