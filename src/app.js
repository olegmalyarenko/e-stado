import "./scss/main.scss";

const nextButton = document.querySelector('.next-button');
const listItem = document.querySelectorAll('.list-item');


nextButton.addEventListener('click', function(e) {
    console.log('dsdfd');
   document.querySelector(".first-quiz").style.display = "none";
   document.querySelector(".second-quiz").style.display = "block";
   document.querySelector(".range").classList.add('half-green');
   document.querySelector(".middle-dot").classList.add('green-dot');
   
})


Array.from(document.querySelectorAll('.list-item')).forEach(el => {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.list-dot')).forEach(e => {
        e.classList.remove('selected');
        });
       el.childNodes[1].classList.add('selected');
      
      
    });
});
