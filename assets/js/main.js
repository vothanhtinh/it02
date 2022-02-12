// Menu Mobile Reponsive
const burger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const Close = document.querySelector('.fa-times');

burger.addEventListener('click', ()=>{
        menu.classList.toggle('menu');
        menu.classList.toggle('menu-active');
});

Close.addEventListener('click', ()=>{
    menu.classList.toggle('menu-active');
    menu.classList.toggle('menu');
});