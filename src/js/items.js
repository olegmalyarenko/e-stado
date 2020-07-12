const emailSelect = document.getElementById('email-select');
const phoneForm = document.querySelector('.phone-form');
const emailForm = document.querySelector('.email-form');





Array.from(document.querySelectorAll('.list-item')).forEach(el => {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.list-dot')).forEach(e => {
        e.classList.remove('selected');
        });
       el.childNodes[1].classList.add('selected');
      
      
    });
});

emailSelect.addEventListener('click', () => {
    debugger;
    Array.from(document.querySelectorAll('.answer-dot')).forEach(e => {
        e.classList.remove('selected');
    });
    emailSelect.childNodes[1].classList.add('selected');
    phoneForm.style.display = "none";
    emailForm.style.display = "block";



 });

 Array.from(document.querySelectorAll('.phone-select')).forEach(el => {
     debugger;
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.answer-dot')).forEach(e => {
        e.classList.remove('selected');
        });
       el.childNodes[1].classList.add('selected');
       phoneForm.style.display = "block";
       emailForm.style.display = "none";
      
    });
});