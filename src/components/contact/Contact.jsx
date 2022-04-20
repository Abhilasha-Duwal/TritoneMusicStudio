import React from "react";
import './contact.css';
import {themeContext} from '../../context';
import {useContext} from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return(
        <div className="contact-form">
            <div className="s-left">
                <div className="s-name">
                    <span className="bigger-text"
                    style={{
                        background : darkMode? 'black' : '',
                        color : darkMode? 'white' : '',
                      }}
                    >Get in touch</span>
                    <span className="bigger-text">Contact Us</span>
                </div>
            </div>
            <div className="cform-right">
                <form action="">
                    <input type="text" name="user_name"  className="user" placeholder="Name"/>
                    <input type="email" name="user_email"  className="user" placeholder="Email"/>
                    <textarea name="message"  className="user" placeholder="Message"/>
                    <input type="submit" value="send"  className="button"/>
                </form>
            </div>
        </div>
    );
}

export default Contact;