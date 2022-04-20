import React from 'react';
import './services.css';
import mix from '../../images/service1.jpg';
import instrument from '../../images/service2.jpg';
import vocal from '../../images/service3.jpg';
import Card from '../card/Card';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Experience from '../experience/Experience';

const Services = () => {
    const transition = { duration: 1, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services-wrapper">
            <div className="services">
                <div className="blur"></div>
                {/* left side */}
                <div className="s-left">
                    <div className="s-name">
                        <span className='big-text'
                            style={{
                                color: darkMode ? 'white' : '',
                            }}
                        >Our Awesome</span>
                        <span className='bigger-text'>Services</span>
                        <ul className='small-text'
                            style={{
                                color: darkMode ? 'white' : '',
                            }}
                        >
                            <li>dummy for now </li>
                            <li>dummy for now</li>
                            <li>dummy for now</li>
                            <li>dummy for now</li>
                            <li>dummy for now</li>
                        </ul>
                    </div>
                    <button className="button s-button">Call Now</button>
                </div>
                {/* right side */}
                <div className="cards">
                    <motion.div
                        whileInView={{ left: '400px' }}
                        initial={{ left: '25%' }}
                        transition={{ transition }}
                        style={{ left: '450px' }}>
                        <Card
                            cardimg={mix}
                            heading={'Mixing & Mastering'}
                            detail={"we add magic in your art"}
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ left: '100px' }}
                        initial={{ left: '25%' }}
                        transition={{ transition }}
                        style={{ left: '50px', top: '200px' }}>
                        <Card
                            cardimg={instrument}
                            heading={'Instrumental Recording'}
                            detail={"we add magic in your art"}
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ left: '450px' }}
                        initial={{ left: '25%' }}
                        transition={{ transition }}
                        style={{ left: '400px', top: '350px' }}>
                        <Card
                            cardimg={vocal}
                            heading={'Vocal Recording'}
                            detail={"we add magic in your art"}
                        />
                    </motion.div>
                </div>
            </div>
            <Experience />
        </div>
    );
}

export default Services;