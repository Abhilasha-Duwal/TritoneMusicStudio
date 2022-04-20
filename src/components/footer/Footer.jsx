import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {themeContext} from '../../context';
import {useContext} from 'react';

const Footer = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="footer"
        style={{
            background : darkMode? 'black' : '',
            color : darkMode? 'white' : '',
          }}
        >
            <div className="f-curve"
               style={{
                background : darkMode? 'black' : '',
                borderBottom: darkMode? ' 5px solid #ba9191' : '',
              }}
            ></div>
            <div className="f-content">
                <span>smngaida@gmail.com</span>
                <div className="f-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>

            </div>
        </div>
    );
}

export default Footer;