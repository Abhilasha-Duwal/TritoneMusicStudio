import React from 'react';
import './experience.css';
import {themeContext} from '../../context';
import {useContext} from 'react';


const Experience = () => { 
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="experience">
            <div className="achievement">
                <div className="circle"
                style={{
                    color : darkMode? 'black' : '',
                  }}
                >5+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" 
                style={{
                    color : darkMode? 'black' : '',
                  }}
                >20+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle"
                 style={{
                    color : darkMode? 'black' : '',
                  }}
                 >5+</div>
                <span>bands & organizations</span>
                <span>Works</span>
            </div>
        </div>
    );
}

export default Experience;