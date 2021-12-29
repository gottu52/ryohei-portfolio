import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const Skill = () => {
    return(
        <section>
            <div>
                <h2>Skill</h2>
                <Swiper
                    modules={ [Pagination] }
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    style={{height: "75%"}}
                >
                    <SwiperSlide>
                      
                    </SwiperSlide>  
                </Swiper>
            </div>
        </section>
    )
}
