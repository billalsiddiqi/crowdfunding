const btnMobile = document.querySelector('#btnMobile');
const over = document.querySelector('#over');
const nav = document.querySelector('.absolute-nav');
const rad = document.querySelectorAll('.radio');
const item = document.querySelector('.single-item');

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('.back-modal');



btnMobile.addEventListener('click', ()=>{
    btnMobile.classList.toggle('open');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-animate');
    over.classList.toggle('fade-out');
    nav.classList.toggle('has-fade');
    nav.classList.toggle('fade-in');
});



openModal.addEventListener('click', ()=>{
    modal.classList.add('open-modal');
    modal.classList.add('fade-modal-in');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-modal');
});

closeModal.addEventListener('click', ()=>{
    modal.classList.remove('open-modal');
    modal.classList.remove('fade-modal-in');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-modal');
});



