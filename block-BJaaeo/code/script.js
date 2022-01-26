let display = document.querySelector('.display-screen');
let numbtn = document.querySelectorAll('.numBtn');

numbtn.forEach((element) => {
  element.addEventListener('click', function(){
     console.log(element.target.dataset-text);
  })
})