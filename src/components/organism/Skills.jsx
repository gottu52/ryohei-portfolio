import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import bgImg from "../../images/background/skill-background.jpg";
// レスポンシブデザイン
import "../../css/mediaQuery.css"

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
        <section id="skills" style={skillStyle}>
            <div style={swiperStyle}>
                <h2 className="skillTitle" style={titleStyle}>Skills</h2>
                <Swiper
                    modules={ [Pagination] }
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    style={{height: "75%"}}
                >
                    <SwiperSlide className="slide">
                        <div className="skillWrapper">
                            <h3>HTML,CSS</h3>
                            <div style={{ color: "#FFCC00" }}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>   
                            </div>    
                        </div>
                        <p className="skillText">
                            HTMLによる基本的なサイトのコーディングや、
                            CSSによるデザイン、アニメーションを実装することができます。
                        </p>
                    </SwiperSlide>  

                    <SwiperSlide className="slide">
                        <div className="skillWrapper">
                           <h3>JS,React,TypeScript</h3> 
                           <div style={{ color: "#FFCC00" }}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>    
                            </div>
                        </div>
                        <p className="skillText">
                            JavaScriptによる静的な処理の実装、
                            Reactによるコンポーネント分割や
                            TypeScriptによる簡単な型定義を行うことができます。
                            現在Firebase等のバックエンド側との連携について勉強中です。
                        </p>
                    </SwiperSlide>  

                    <SwiperSlide className="slide">
                        <div className="skillWrapper">
                            <h3>Photoshop,Figma</h3>
                            <div style={{ color: "#FFCC00" }}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>    
                            </div>  
                        </div>
                        <p className="skillText">
                            簡単な画像の加工やロゴの作成を行うことができます。
                            下記の作品内のロゴもPhotoshopやFigmaを用いて作成しました。
                        </p>
                    </SwiperSlide>  
                </Swiper>
            </div>
        </section>
    )
}
