const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

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
            slidesPerView: 4,
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
    swiper.slideNext();
}

const handlePrev = () => {
    swiper.slidePrev();
}

let next = document.querySelector('#mynext')
next.addEventListener('click', handleNext)

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

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
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const swiper4 = new Swiper('.swiper4', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const swiper5 = new Swiper('.swiper5', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

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
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});