import React from 'react';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { themeContext } from '../../context';
import { useContext } from 'react';
import YoutubeEmbed from '../homevideo/YoutubeEmbed';


const Home = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="home">
            <div className="h-left">
                <div className="h-name">
                    <span className='big-text'
                        style={{
                            background: darkMode ? 'black' : '',
                            color: darkMode ? 'white' : '',
                        }}
                    >Welcome to the</span>
                    <span className='bigger-text'>Tritone Music Studio</span>
                    <span className='small-text'
                        style={{
                            background: darkMode ? 'black' : '',
                            color: darkMode ? 'white' : '',
                        }}
                    >Experiece the quality sound production with
                        high level of experienced sound Engineer.
                        Producing the quality work</span>
                </div>
                <button className="button h-button">Call Now</button>
                <div className="h-icons">
                    <a href="https://www.facebook.com/TritoneStd">
                        <FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/tritone.music.studio/">
                        <FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/channel/UC9Ju_1V1_D2mDYNwo5ohG4Q">
                        <FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
            <div className="h-right">
                <YoutubeEmbed embedId="0uhO3iK44OU"/>
            </div>
        </div>
    );
}

export default Home;