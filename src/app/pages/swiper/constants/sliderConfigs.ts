import { SwiperOptions } from "swiper/types"

export const textSliderConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    navigation: true,
    pagination: true,
    slidesPerGroup: 1,
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      1980: {
        slidesPerView: 4,
      },
    }
}

export const planetsSliderConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  navigation: true,
  pagination: true,
  slidesPerGroup: 1,
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
    1780: {
      slidesPerView: 4,
    },
  }
}

export const imagesSliderConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: true,
  pagination: true,
  slidesPerGroup: 1,
  breakpoints: {
    980: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1480: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1980: {
      slidesPerView: 4,
      spaceBetween: 60
    },
  }
}
