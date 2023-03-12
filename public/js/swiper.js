const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    //slidesPerView: 1.5,
    spaceBetween: 30,

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const handleNext = () => {
    console.log('dgdg')
    swiper.slideNext();
}

const handlePrev = () => {
    swiper.slidePrev();
}

let next = document.querySelector('#mynext')
next.addEventListener('click', handleNext)