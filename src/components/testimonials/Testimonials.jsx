import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mix from '../../images/service1.jpg';
import instrument from '../../images/service2.jpg';
import vocal from '../../images/service3.jpg';
import { Pagination,Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: mix,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting indus.Lorem Ipsum is simply dummy text of the printing and typesetting indus.Lorem Ipsum is simply dummy text of the printing and typesetting indus.",

        }, {
            img: instrument,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting indus.",
        },
        {
            img: vocal,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting indus.",
        }

    ]
    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span className='big-text'>Exceptional Works</span>
                <span>from me...</span>
            </div>
            {/* sliders */}
            <Swiper
                modules={[Pagination,Autoplay]}
                slidesPerView={1}
                autoplay={{delay : 2000}}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span
                                style={{
                                    color : darkMode? 'white' : '',
                                  }}
                                >{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Testimonials;