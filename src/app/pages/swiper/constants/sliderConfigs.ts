import { SwiperOptions } from "swiper/types"

export const textSliderConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    navigation: true,
    pagination: true,
    slidesPerGroup: 1,
    breakpoints: {
      1080: {
        slidesPerView: 3,
      },
      1240: {
        slidesPerView: 4,
      },
    }
}
