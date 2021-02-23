const btnMobile = document.querySelector('#btnMobile');
const over = document.querySelector('#over');
const nav = document.querySelector('.absolute-nav');



btnMobile.addEventListener('click', ()=>{
    btnMobile.classList.toggle('open');
    over.classList.toggle('overlay-animate');
    over.classList.toggle('fade-out');
    nav.classList.toggle('has-fade');
    nav.classList.toggle('fade-in');
})