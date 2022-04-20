import React from 'react';
import '../about/about.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mix from '../../images/service1.jpg';
import instrument from '../../images/service2.jpg';
import vocal from '../../images/service3.jpg';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: mix,
        },
        {
            img: instrument,
        },
        {
            img: vocal,
        }

    ]
    return (
        <div className="about-wrapper">
            <div className="abt-left">
                <div className="h-name">
                    <span className='bigger-text'>Tritone Music Studio</span>
                    <span className='big-text'
                        style={{
                            background: darkMode ? 'black' : '',
                            color: darkMode ? 'white' : '',
                        }}
                    >Established on 2018 AD</span>
                    <span className='small-text'
                        style={{
                            background: darkMode ? 'black' : '',
                            color: darkMode ? 'white' : '',
                        }}
                    >Experiece the quality sound production with
                        high level of experienced sound Engineer.
                        Producing the quality work</span>
                </div>
            </div>
            <div className="abt-right">
                {/* sliders */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay
                >
                    {clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={client.img} alt="" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default About;