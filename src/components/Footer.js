import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
function Footer(){

    return(
    <footer>
        <a href="https://github.com/tyler1836" target='_blank' rel='noopener noreferrer'> <AiFillGithub size={70}/></a>
        <a href="https://linkedin.com/in/tyler-roll/" target='_blank' rel='noopener noreferrer'><AiFillLinkedin size={70}/></a>
    </footer>)
}

export default Footer;