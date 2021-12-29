import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import bgImg from "../../images/background/works-background.jpg";
import RunningImg from "../../images/works/RunningMethodImage.png";

export const Works = () => {

  const worksStyle = {
    backgroundImage: `url(${bgImg})`
  }
  const swiperStyle ={
    height: "60vh",
    width: "60vw"
      
  }
  const swiperItemStyle = {
    color: "red"
  }


  return(
    <section style={worksStyle}>
      <Swiper
      //spaceBetween={50}
        slidesPerView={1}
        style={swiperStyle}
      >
        <SwiperSlide style={swiperItemStyle}>
          <div>
            <img src={RunningImg} alt="running" />
            <p>Running-method</p>
          </div>
          </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </section>
      
  )
}

