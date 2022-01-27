let btn = document.querySelectorAll('.btn');

btn.forEach((event) => {
  event.addEventListener('click', function(){
  console.log(event.dataset.selection);
  })
});