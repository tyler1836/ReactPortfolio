import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
function Footer(){

    return(
    <footer>
        <ul>
            <li>Github Account: <a href="https://github.com/tyler1836" target='_blank' rel='noopener noreferrer'>Github <AiFillGithub /></a></li>
            <li>LinkedIn Account: <a href="https://linkedin.com/in/tyler-roll/" target='_blank' rel='noopener noreferrer'>Tyler Roll<AiFillLinkedin /></a></li>
        </ul>
    </footer>)
}

export default Footer;