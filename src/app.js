import "./scss/main.scss";

const fistButton = document.querySelector('.next-button');

fistButton.addEventListener('click', function(e) {
    console.log('dsdfd');
   document.querySelector(".first-quiz").style.display = "none";
   document.querySelector(".second-quiz").style.display = "block";
   document.querySelector(".range").classList.add('half-green');
   
})