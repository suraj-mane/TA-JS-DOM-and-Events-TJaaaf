// without Delegation 
let firstbox = document.querySelectorAll('.first li');
let secBox = document.querySelector('.secound')

firstbox.forEach((element, index) => {
  element.addEventListener('click', (element) => {
    element.target.innerText = index +1;

    setTimeout(() => {
      element.target.innerText = "";
    }, 5000);
  });
});

// with delegation 

secBox.addEventListener('click', (element) => {
  let text = element.target.dataset.text;
  element.target.innerText = text;

  setTimeout(() => {
    element.target.innerText = "";
  }, 5000);
});

