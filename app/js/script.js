
const body = document.getElementsByTagName('body')[0];
const overlay = document.getElementById('overlay')
const btnMobile = document.querySelector('#btnMobile');
const over = document.querySelector('#over');
const nav = document.querySelector('.absolute-nav');
const rad = document.querySelectorAll('.radio');
const item = document.querySelector('.single-item');

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('.back-modal');

const bookmarkBtn = document.querySelector('.bookmark');
const success = document.querySelector('.success-modal');
const got = document.querySelector('.got');


//Menu toggle
btnMobile.addEventListener('click', ()=>{
    btnMobile.classList.toggle('open');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-animate');
    nav.classList.toggle('has-fade');
    nav.classList.toggle('fade-in');
    body.classList.toggle('overflow-hidden')
});


//open modal
openModal.addEventListener('click', ()=>{
    modal.classList.add('open-modal');
    over.classList.toggle('overlay');
    overlay.classList.toggle('overlay-modal');
    
});
//close modal
closeModal.addEventListener('click', ()=>{
    modal.classList.remove('open-modal');
    over.classList.toggle('overlay');
    overlay.classList.toggle('overlay-modal');
});

//open success modal

bookmarkBtn.addEventListener('click', ()=>{
    success.classList.add('open-modal');
    success.classList.add('fade-modal-in');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-success-modal');
    body.classList.toggle('overflow-hidden');

});

// close success modal
got.addEventListener('click', ()=>{
    success.classList.remove('open-modal');
    success.classList.remove('fade-modal-in');
    over.classList.toggle('overlay');
    over.classList.toggle('overlay-success-modal');
    body.classList.toggle('overflow-hidden')

})


