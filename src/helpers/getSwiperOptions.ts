import { Autoplay } from 'swiper';

const getSwiperOptions = (row: number) => {
    return {
        modules: [Autoplay],
        slidesPerView: 3,
        spaceBetween: 50,
        allowTouchMove: false,
        speed: 10000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: row % 2 !== 0 ? true : false
        }
    }
}

export default getSwiperOptions;