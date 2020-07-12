const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');

firstButton.addEventListener('click', function(e) {
    document.querySelector(".first-quiz").style.display = "none";
    document.querySelector(".second-quiz").style.display = "block";
    document.querySelector(".range").classList.add('half-green');
    document.querySelector(".middle-dot").classList.add('green-dot');  
});

secondButton.addEventListener('click', function(e) { 
  document.querySelector(".second-quiz").style.display = "none";
  document.querySelector(".third-quiz").style.display = "block";
  document.querySelector(".range").classList.add('full-green');
  document.querySelector(".right-dot").classList.add('green-dot');
});

thirdButton.addEventListener('click', function(e) { 
  document.querySelector(".third-quiz").style.display = "none";
  document.querySelector(".feedback").style.display = "block";


});
