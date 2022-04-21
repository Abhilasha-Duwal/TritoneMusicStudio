import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import Toggle from '../toggle/Toggle';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [showNav, setshowNav] = useState(false);

    return (
        <div className="navbar-wrapper"
            style={{
                background: darkMode ? '#171616' : '',
            }}
        >
            <div className="n-left">
                <div className="n-brand">
                    <img src={logo} alt="logo" />
                </div>
                <Toggle />
            </div>

            <div className="n-right">
                <div className="hamburger" onClick={() => setshowNav(!showNav)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={showNav ? "n-list mobile-menu" : "n-list"}>
                    <ul
                        style={{
                            background: darkMode ? '#171616' : '',
                        }}
                    >

                        <li><NavLink to=" "
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "var(--red)" : ""
                                }
                            }}
                        ><FontAwesomeIcon icon={faHome} />Home</NavLink></li>
                        <li><NavLink to="/about"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "var(--red)" : ""
                                }
                            }}
                        >About Us</NavLink></li>
                        <li><NavLink to="/services"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "var(--red)" : ""
                                }
                            }}
                        >Services</NavLink></li>
                        <li><NavLink to="/works"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "var(--red)" : ""
                                }
                            }}
                        >Works</NavLink></li>
                        <li><NavLink to="/testimonials"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "var(--red)" : ""
                                }
                            }}
                        >Testimonials</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/contact"><button className="button n-button">Contact Us</button></NavLink>
            </div>
        </div>
    );
}

export default Navbar;