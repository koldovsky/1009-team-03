const carouselInner = document.querySelector('.shows__carousel-inner');
const prevButton = document.querySelector('.shows__button--prev');
const nextButton = document.querySelector('.shows__button--next');
const caruoselArea = document.querySelector('.shows__carousel-container');

let carouselPosition = 0;
let carouselChange = 0;

function checkWindowWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
        carouselChange = 235;
    } else {
        carouselChange = 370;
    }
};

window.addEventListener('resize', checkWindowWidth);


function moveCarousel() {
    checkWindowWidth()
    if (carouselPosition > -700) {
        carouselPosition -= carouselChange;
        carouselInner.style.transform = `translateX(${carouselPosition}px)`;
    } else {
        carouselPosition = 0;
        carouselInner.style.transform = `translateX(${carouselPosition}px)`;
    }
};

nextButton.addEventListener('click', moveCarousel);


prevButton.addEventListener('click', () => {
    checkWindowWidth()
    if (carouselPosition < 0) {
        carouselPosition += carouselChange;
        carouselInner.style.transform = `translateX(${carouselPosition}px)`;
    }
});

let autoUpdateShowsCarousel = setInterval(moveCarousel, 2000);

caruoselArea.addEventListener('mouseover', () => {
    clearInterval(autoUpdateShowsCarousel)
});
caruoselArea.addEventListener('mouseout', () => {
    autoUpdateShowsCarousel = setInterval(moveCarousel, 2000)
});
