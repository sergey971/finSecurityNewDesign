const burger = document.querySelector('#burger');
const headerNavRow = document.querySelector('.header__nav__row');
const AllSection = document.querySelector('.menu');
const noTitle = document.querySelector('.noTitle');
const bulet = document.querySelector('.bulet');
const btn = document.querySelector('.btn');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    noTitle.classList.toggle('none');
    bulet.classList.toggle('none');
    AllSection.classList.toggle('menuBG');
    btn.classList.toggle('styleBurgerBtn');
    headerNavRow.classList.toggle('active');

});