import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Works = () => {
    const swiperStyle ={
        height: "100vh"
    }

    const swiperItemStyle = {
        color: "red"
    }

    return(
        <Swiper
    //   spaceBetween={50}
      slidesPerView={3}
      style={swiperStyle}
    >
      <SwiperSlide style={swiperItemStyle}>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    )
}
