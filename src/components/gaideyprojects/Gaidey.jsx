import React from 'react';
import './gaidey.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tritonecover from '../../images/tritonecover.jpg';
import mix from '../../images/service1.jpg';

const Gaidey = () => {
    return (
        <div className="gaidey">
            {/* heading */}
            <span>Recent Projects On</span>
            <span className='bigger-text'>GAIDEY SESSION</span>

            {/* sliders */}
            <Swiper className='gaidey-slider'
             spaceBetween={30}
             slidesPerView={3}
             grabCursor={true}

             breakpoint={{
                // when window width is >= 640px
                480: {
                  width: 480,
                  slidesPerView: 1,
                },
            }}
            >
                <SwiperSlide>
                    <img src={tritonecover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mix} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tritonecover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mix} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Gaidey;