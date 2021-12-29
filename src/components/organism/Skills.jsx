import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import bgImg from "../../images/background/skill-background.jpg";

export const Skills = () => {

    const skillStyle = {
        backgroundImage: `url(${bgImg})`
      }
      const swiperStyle ={
        height: "50vh",
        width: "80vw",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "8px 16px",
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

    return(
        <section id="skill" style={skillStyle}>
            <div style={swiperStyle}>
                <h2 style={titleStyle}>Skills</h2>
                <Swiper
                    modules={ [Pagination] }
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    style={{height: "75%"}}
                >
                    <SwiperSlide>
                        <h3>HTML,CSS</h3>
                        <div style={{ color: "#FFCC00" }}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>   
                        </div>
                        <p>
                            HTMLによる基本的なサイトのコーディングや、
                            CSSによるデザイン、アニメーションを実装することができます。
                        </p>
                    </SwiperSlide>  

                    <SwiperSlide>
                        <h3>JS,React,TypeScript</h3>
                        <div style={{ color: "#FFCC00" }}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>    
                        </div>
                        <p>
                            JavaScriptによる静的な処理の実装、
                            Reactによるコンポーネント分割や
                            TypeScriptによる簡単な型定義を行うことができます。
                            現在Firebase等のバックエンド側との連携について勉強中です。
                        </p>
                    </SwiperSlide>  

                    <SwiperSlide>
                        <h3>Photoshop,Figma</h3>
                        <div style={{ color: "#FFCC00" }}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>    
                        </div>
                        <p>
                            簡単な画像の加工やロゴの作成を行うことができます。
                            下記の作品内のロゴもPhotoshopやFigmaを用いて作成しました。
                        </p>
                    </SwiperSlide>  
                </Swiper>
            </div>
        </section>
    )
}
