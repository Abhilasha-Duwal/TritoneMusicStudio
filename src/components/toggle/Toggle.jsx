import React from "react";
import './toggle.css';
import { themeContext } from '../../context';
import { useContext } from "react";

const Toggle = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className="toggle">
            <span>Dark Mode</span>
            <div className="toggle-content" onClick={handleClick}
                style={{
                    background: darkMode ? 'white' : '',
                    color: darkMode ? 'black' : ''
                }}>
                <span>on</span>
                <span>of</span>
                <div className="t-button" style={darkMode ? { left: '0', background: 'black' } :
                    { right: '0' }}>
                </div>
            </div>
        </div>
    );
}

export default Toggle;