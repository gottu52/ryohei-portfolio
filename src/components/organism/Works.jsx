import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import bgImg from "../../images/background/works-background.jpg";
import RunningImg from "../../images/works/RunningMethodImage.png";
import HairSalonImg from "../../images/works/HairSalonImage.png";
import GymImg from "../../images/works/GymImage.png";
import TodoImg from "../../images/works/TodoImage.png";

export const Works = () => {

  const worksStyle = {
    backgroundImage: `url(${bgImg})`
  }
  const swiperStyle ={
    height: "65vh",
    width: "60vw",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "8px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  }
  const titleStyle = {
    margin: "0",
    fontFamily: "'Vujahday Script', curive",
    fontSize: "4rem"
  }
  const imgStyle = {
    width: "70%",
    height: "120px",
    border: "solid 1px black",
    
  }
  const textStyle = {
    fontWeight: "bold",
    margin: "8px"
  }


  return(
    <section style={worksStyle}>
      <div style={swiperStyle}>
        <h2 style={titleStyle}>Works</h2>
        <Swiper
          modules={ [Pagination] }
          pagination={{ clickable: true }}
          slidesPerView={1}
          style={{height: "75%"}}
        >
          <SwiperSlide>
            <img src={RunningImg} alt="running" style={imgStyle}/>
            <p style={textStyle}>Running-method</p>
            <p style={textStyle}>製作日数 : 4日</p>
            <p style={textStyle}>言語 : HTML,CSS,JS</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={HairSalonImg} alt="HairSalon" style={imgStyle}/>
            <p style={textStyle}>Hair-salon</p>
            <p style={textStyle}>製作日数 : 2日</p>
            <p style={textStyle}>言語 : HTML,CSS,JS</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={GymImg} alt="gym" style={imgStyle}/>
            <p style={textStyle}>Gold-gym</p>
            <p style={textStyle}>製作日数 : 3日</p>
            <p style={textStyle}>言語 : HTML,CSS,JS</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={TodoImg} alt="todo" style={imgStyle}/>
            <p style={textStyle}>Todo-app</p>
            <p style={textStyle}>製作日数 : 1日</p>
            <p style={textStyle}>言語 : HTML,CSS,React</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
      
  )
}

