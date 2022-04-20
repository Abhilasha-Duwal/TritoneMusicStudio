import React from 'react';
import './works.css';
import Gaidey from '../gaideyprojects/Gaidey'
import { themeContext } from '../../context';
import { useContext } from 'react';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
        <div className="works">
            {/* left side */}
            <div className="s-left">
                <div className="s-name">
                    <span className='big-text'
                        style={{
                            color: darkMode ? 'white' : '',
                        }}
                    >Works for All these</span>
                    <span className='bigger-text'>Bands & Clients</span>
                    <ul
                        style={{
                            color: darkMode ? 'white' : '',
                        }}
                    >
                        <li>Dummy texDummy tex</li>
                        <li>Dummy texDummy tex</li>
                        <li>Dummy texDummy tex</li>
                        <li>Dummy texDummy tex</li>
                    </ul>
                </div>
                <button className="button s-button">Call Now</button>
            </div>
            {/* right side */}
            <div className="w-right">
                <div style={{ position: 'relative', zIndex: '2' ,
                    border: darkMode ? 'white' : '',
                }}
                >
                    <iframe
                        width="90%"
                        height="400px"
                        src={`https://www.youtube.com/embed/9l4QzACtIQw?autoplay=1&mute=1&start=15`}
                        frameBorder="1"
                        allow="accelerometer; autoplay;clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
        <Gaidey/>
        </>
    );
}

export default Works;