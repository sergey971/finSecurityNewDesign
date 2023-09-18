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
    headerNavRow.classList.toggle('active');
    AllSection.classList.toggle('menuBG');
    btn.classList.toggle('styleBurgerBtn');
    burger.classList.toggle('open');
    noTitle.classList.toggle('none');
    bulet.classList.toggle('none');

});
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    // nextArrow: $('.prev'), // Кастомная кнопка "Предыдущий слайд"
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
    // prevArrow: $('.prevVideo'), // Кастомная кнопка "Предыдущий слайд"
    // nextArrow: $('.nextVideo')  // Кастомная кнопка "Следующий слайд"
});
// $('.sliderDesc').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1, // Прокручивать по одному слайду
//     prevArrow: $('.prevDesc'), // Кастомная кнопка "Предыдущий слайд"
//     nextArrow: $('.nextDesc')  // Кастомная кнопка "Следующий слайд"
// });
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    prevArrow: $('.prevDesc'),
    nextArrow: $('.nextDesc'),
    nav: false,
    items: 3,
    responsive: {
        // Настройки для маленьких экранов (меньше 768px)
        320: {
            items: 1,
            margin: 20 // Отображать 1 слайд
        },
        // Настройки для средних экранов (768px и больше)
        768: {
            items: 2, // Отображать 2 слайда
            margin: 30,
        },
        // Настройки для больших экранов (992px и больше)
        1024: {
            items: 3, // Отображать 3 слайда (исходные настройки)
            margin: 30,
        }

    }
})
$('.prevDesc').click(function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.nextDesc').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
});