const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        380: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1.7,
            spaceBetween: 20,
        },
        815: {
            slidesPerView: 2.3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3.4,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3.9,
            spaceBetween: 30,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 1.5,
    spaceBetween: 10,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

var menu = ['Slide 1', 'Slide 2', 'Slide 3']
const swiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    freeMode: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 500,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" style="background: url(/public/images/Surface1.png); background-size: cover; background-position: center;"></span>';
        },
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
    direction: 'horizontal',
    loop: false,

    slidesPerView: 1.2,
    //slidesPerView: 1.5,
    spaceBetween: 10,

    breakpoints: {
        360: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const swiper6 = new Swiper('.swiper6', {
    direction: 'horizontal',
    loop: false,
    

    slidesPerView: 0.5,
    spaceBetween: 10,

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `
                <div class="${className} py-[10px] px-[11px]">
                    ${index + 1}
                </div>
            `
        },
    }
});