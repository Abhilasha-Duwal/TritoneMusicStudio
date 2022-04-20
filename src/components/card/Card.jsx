import React from 'react';
import './card.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Card = ({ cardimg, heading, detail }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="card">
            <div className="imgholder">
                <img src={cardimg} alt="" />
            </div>
            <span>{heading}</span>
            <span
                style={{
                    color: darkMode ? 'white' : '',
                }}
            >{detail}</span>
            <button className="c-button">Learn More</button>
        </div>
    );
}

export default Card;