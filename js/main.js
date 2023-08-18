const burger = document.querySelector('#burger');
const headerNavRow = document.querySelector('.header__nav__row');
const partner = document.querySelector('.partners');
const partnersTitle = document.querySelector('.partners__title');
const partnersBtn = document.querySelector('.partners__btn');

// headerNavRow.classList.add('none');
burger.addEventListener('click', () =>{
    burger.classList.toggle('open');
    partnersTitle.classList.toggle('none');
    partner.classList.toggle('partnerBG');
    partnersBtn.classList.toggle('partnersBtn');
    headerNavRow.classList.toggle('active');
    
});