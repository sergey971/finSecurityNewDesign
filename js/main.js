// const burger = document.querySelector('#burger');
// const headerNavRow = document.querySelector('.header__nav__row');
// const partner = document.querySelector('.partners');
// const partnersTitle = document.querySelector('.partners__title');
// const partnersBtn = document.querySelector('.partners__btn');

// // headerNavRow.classList.add('none');
// burger.addEventListener('click', () => {
//     burger.classList.toggle('open');
//     partnersTitle.classList.toggle('none');
//     partner.classList.toggle('partnerBG');
//     partnersBtn.classList.toggle('partnersBtn');
//     headerNavRow.classList.toggle('active');

// });

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
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: $('.prev'), // Кастомная кнопка "Предыдущий слайд"
    // nextArrow: $('.next')  // Кастомная кнопка "Следующий слайд"
    swipe: true,
});
$('.sliderVideo').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    swipe: true,
    adaptiveHeight: true,
    prevArrow: $('.prevVideo'), // Кастомная кнопка "Предыдущий слайд"
    nextArrow: $('.nextVideo')  // Кастомная кнопка "Следующий слайд"
});



